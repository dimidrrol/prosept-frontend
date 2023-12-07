import './App.scss'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useGetMatchesQuery } from '../../store/api/cards.api';
import Preloader from '../Preloader/Preloader';
import PopupError from '../PopupError/PopupError';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const { data, isFetching } = useGetMatchesQuery(null, {});
  const error = useSelector(state => state.error)

  return (
    <div className='app'>
      {error && <PopupError />}
      <Header />
      {isFetching ?
        <Preloader />
        : <Main data={data} />
      }
      <Footer />
    </div>
  )
}

export default App
