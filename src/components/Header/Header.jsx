import './Header.scss';
import logo from '../../images/logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <a className='header__logo' href='https://prosept.ru/' target='_blank' rel='noreferrer'><img alt='Логотип' src={logo} /></a>
            <button type='button' className='header__button'>Выпадающее меню</button>
        </header>
    )
}