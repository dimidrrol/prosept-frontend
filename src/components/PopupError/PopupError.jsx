import './PopupError.scss';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

export default function PopupError() {
    const error = useSelector(state => state.error)
    const { removeError } = useActions();

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
    }, [])

    function handleClosePopup() {
        document.removeEventListener('keydown', handleEscClose);
        removeError();
    }

    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            handleClosePopup();
        }
    }

    return (
        <div onClick={handleClosePopup} className='popup'>
            <div className='popup__container'>
                <button onClick={handleClosePopup} className='popup__close-button'>✖</button>
                <h2 className='popup__error'>{error}</h2>
            </div>
        </div>
    )
}