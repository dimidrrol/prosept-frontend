import './Menu.scss';
import ProducerCard from '../ProducerCard/ProducerCard';
import Preloader from '../Preloader/Preloader';

export default function Menu() {
    return (
        <div className='menu'>
            <Preloader />
            <div className='menu__dealer-box'>
                <ul className='menu__dealer-info'>
                    <li className='menu__dealer-item'>Имя диллера</li>
                    <li className='menu__dealer-item'>Название товара</li>
                    <li className='menu__dealer-item'>Цена товара</li>
                    <li className='menu__dealer-item'><a href='#'>Ссылка на товар</a></li>
                </ul>
            </div>
            <div className='menu__producer-box'>
                <div className='menu__producer-contents'>
                    <h2 className='menu__producer-item'>Артикул</h2>
                    <h2 className='menu__producer-item'>Название</h2>
                    <h2 className='menu__producer-item'>Цена</h2>
                </div>
                <div className='menu__producer-cards'>
                    <ProducerCard />
                    <ProducerCard />
                    <ProducerCard />
                    <ProducerCard />
                    <ProducerCard />
                </div>
            </div>
            <div className='menu__button-box'>
                <button type='button' className='menu__button menu__button_type_yes'>Да</button>
                <button type='button' className='menu__button menu__button_type_not'>Нет</button>
                <button type='button' className='menu__button menu__button_type_postpone'>Отложить</button>
            </div>
        </div>
    )
}