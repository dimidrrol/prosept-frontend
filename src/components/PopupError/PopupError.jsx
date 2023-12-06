import './PopupError.scss';
import useActions from '../../hooks/useActions';

export default function PopupError({ handleClosePopup, isOpenPopup, setIsOpenPopup }) {
    const { setError } = useActions();

    return (
        <div className={`popup ${isOpenPopup ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <button onClick={handleClosePopup} className='popup__close-button'>✖</button>
                <h2 className='popup__error'>Какая-то ошибка серьезная очень</h2>
            </div>
        </div>
    )
}