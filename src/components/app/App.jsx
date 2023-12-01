import { useSelector } from 'react-redux'
import './App.css'
import { useDeleteDealerCardMutation, useGetMatchesQuery } from '../../store/api/cards.api';
import useActions from '../../hooks/useActions';

function App() {
  const itemId = useSelector(state => state.itemId);
  const { data, isLoading } = useGetMatchesQuery(null, {});
  const [deleteDealerCard, { error, isError, isSuccess }] = useDeleteDealerCardMutation();
  const { setItemId } = useActions()

  //Элементы списка
  const handleBtn = (e) => setItemId(e.target.id)
  itemsToRender.map(item => (
    <li id={item.id} onClick={handleBtn} />
  ))
  //в мейне выбираем элемент
  const element = data.find(item => item.id = itemId)

  return (
    <div className='app'>
      {isLoading ?
        <Preloader /> :
        <>
          {
            data ?
              <>
                <Menu />
                {itemId ?
                  < Main /> :
                  <div>Выберите карточку</div>
                }
              </> :
              <div>Произошла ошибка</div>
          }
        </>
      }
    </div>
  )
}

export default App
