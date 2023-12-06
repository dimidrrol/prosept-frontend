import './App.scss'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useGetMatchesQuery } from '../../store/api/cards.api';
import Preloader from '../Preloader/Preloader';

function App() {
  const { data, isFetching } = useGetMatchesQuery(null, {})

  return (
    <div className='app'>
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
