import './Main.scss';
import triangle from '../../images/triangle.svg';
import React from 'react';
import Menu from '../Menu/Menu';

export default function Main() {
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
        <main className='main'>
            <button onClick={handleOpenSearch} type='button' className={`main__button ${isOpen ? 'main__button_closed' : ''}`}>Список карточек<img className='main__triangle' src={triangle} alt='Треугольник' /></button>
            <div className={`main__input-box ${isOpen ? 'main__input-box_opened' : ''}`}>
                <input onChange={onChange} value={searchValue} type='text' placeholder='Поиск...' className='main__search' />
                <button onClick={closeList} type='button' className='main__close-button'>&#10006;</button>
            </div>
            <div className={`main__list ${isOpen ? 'main__list_opened' : ''}`}>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
                <button className='main__list-item'>Антисептик Просепт 1л.</button>
            </div>
            <Menu />
        </main>
    )
}