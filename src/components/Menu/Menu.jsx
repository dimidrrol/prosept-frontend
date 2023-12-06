import './Menu.scss';
import triangle from '../../images/triangle.svg';
import React from 'react';

export default function Menu() {
    const [searchValue, setSearchValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);

    function onChange(evt) {
        const value = evt.target.value;
        setSearchValue(value);
    }

    function handleOpenSearch() {
        isOpen ? setIsOpen(false) : setIsOpen(true);
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
                <button onClick={closeList} type='button' className='menu__close-button'>&#10006;</button>
            </div>
            <div className={`menu__list ${isOpen ? 'menu__list_opened' : ''}`}>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
                <button className='menu__list-item'>Антисептик Просепт 1л.</button>
            </div>
        </div>
    )
}