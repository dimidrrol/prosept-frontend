import './Header.scss';
import logo from '../../images/logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <a className='header__logo' href='https://prosept.ru/' target='_blank' rel='noreferrer'>
                    <img className='header__img' alt='Логотип' src={logo} />
                </a>
                <button type='button' className='header__button'>Выпадающее меню</button>
            </div>
        </header>
    )
}