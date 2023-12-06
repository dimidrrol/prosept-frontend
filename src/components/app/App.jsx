import './App.scss'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useGetMatchesQuery } from '../../store/api/cards.api';
import Preloader from '../Preloader/Preloader';
import PopupError from '../PopupError/PopupError';
import { useState } from 'react';

function App() {
  const { isFetching } = useGetMatchesQuery(null, {});
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function handleClosePopup() {
    setIsOpenPopup(false);
    document.removeEventListener('keydown', handleEscClose);
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      handleClosePopup();
    }
  }

  return (
    <div className='app'>
      <PopupError
        handleClosePopup={handleClosePopup}
        isOpenPopup={isOpenPopup}
        setIsOpenPopup={setIsOpenPopup}
      />
      <Header />
      {isFetching ?
        <Preloader />
        : <Main />
      }
      <Footer />
    </div>
  )
}

export default App
