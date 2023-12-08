import './Menu.scss';
import triangle from '../../images/triangle.svg';
import { useState, useEffect } from 'react';
import { useGetMatchesQuery } from '../../store/api/cards.api';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { useDebounce } from "@uidotdev/usehooks";

export default function Menu() {
    const { data } = useGetMatchesQuery(null, {});
    const itemId = useSelector(state => state.itemId);
    const { setItemId } = useActions();
    const [searchValue, setSearchValue] = useState('');
    const [filteredDealer, setFilteredDealer] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [dealerId, setDealerId] = useState(itemId);
    const debouncedSearchValue = useDebounce(searchValue, 300);

    useEffect(() => {
        setDealerId(itemId ? itemId : data[0].dealer_product.id)
        setFilteredDealer(data
            .map((item) => {
                return ({ product_name: item.dealer_product.product_name, id: item.dealer_product.id })
            })
            .filter((card) => card.product_name.includes(searchValue)));
    }, [debouncedSearchValue, data]);

    function handleChooseItem(evt) {
        setDealerId(evt.target.closest('.menu__list-item').id);
        setItemId(evt.target.closest('.menu__list-item').id);
    }

    function onChange(evt) {
        const value = evt.target.value;
        setSearchValue(value);
    }

    function handleOpenSearch() {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    function handleCleanSearch() {
        setSearchValue('');
    }

    function closeList() {
        setIsOpen(false);
    }

    return (
        <div className='menu'>
            <button onClick={handleOpenSearch} type='button' className={`menu__button ${isOpen ? 'menu__button_closed' : ''}`}>
                Список карточек
                <img className='menu__triangle' src={triangle} alt='Треугольник' />
            </button>
            <div className={`menu__input-box ${isOpen ? 'menu__input-box_opened' : ''}`}>
                <input onChange={onChange} value={searchValue} type='text' placeholder='Поиск...' className='menu__search' />
                <button onClick={handleCleanSearch} type='button' className='menu__clean-button'>Очистить</button>
            </div>
            <div className={`menu__list ${isOpen ? 'menu__list_opened' : ''}`}>
                <button onClick={closeList} type='button' className='menu__close-button'>✖</button>
                {filteredDealer.map((item) => {
                    return (
                        <button onClick={handleChooseItem} id={item.id} key={item.id} className={`menu__list-item ${+dealerId === item.id ? 'menu__list-item_chosen' : ''}`}>{item.product_name}</button>
                    )
                })}
            </div>
        </div>
    )
}