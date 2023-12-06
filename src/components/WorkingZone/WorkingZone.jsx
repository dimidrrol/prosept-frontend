import './WorkingZone.scss';
import ProducerCard from '../ProducerCard/ProducerCard';
import { useDeleteDealerCardMutation, useGetMatchesQuery, useMoveCardToEndMutation, usePostPairMutation } from '../../store/api/cards.api';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function WorkingZone() {
    const { data } = useGetMatchesQuery(null, {});
    const itemId = useSelector(state => state.itemId);
    const [postPair, { isSuccess: isSuccessPost }] = usePostPairMutation();
    const [deleteItem, { isSuccess: isSuccessDelete }] = useDeleteDealerCardMutation();
    const [moveToEnd, { isSuccess: isSuccessMove }] = useMoveCardToEndMutation();
    const currentElement = itemId ? data.find(item => item.dealer_product.id === itemId) : data[0];
    const [proseptId, setProseptId] = useState('');
    const { dealer_product } = currentElement;

    const handleChooseCard = (e) => {
        setProseptId(e.target.closest('.producer-card').id)
    }

    const handlePostPair = () => {
        postPair({ dealer_product_id: currentElement.dealer_product.id, prosept_id: proseptId })
    }

    const handleDeleteItem = () => {
        deleteItem({ dealer_product_id: currentElement.dealer_product.id });
    }

    const handleMoveToEnd = () => {
        moveToEnd({ dealer_product_id: currentElement.dealer_product.id });
    }

    useEffect(() => {
        if (isSuccessPost) setProseptId('')
    }, [isSuccessPost])

    useEffect(() => {
        if (isSuccessDelete) setProseptId('')
    }, [isSuccessDelete])

    useEffect(() => {
        if (isSuccessMove) setProseptId('')
    }, [isSuccessMove])

    return (
        <div className='working-zone'>
            <div className='working-zone__dealer-box'>
                <ul className='working-zone__dealer-info'>
                    <li className='working-zone__dealer-item'>{dealer_product.dealer_name}</li>
                    <li className='working-zone__dealer-item'>{dealer_product.product_name}</li>
                    <li className='working-zone__dealer-item'>{dealer_product.price} руб.</li>
                    <li className='working-zone__dealer-item'><a href={dealer_product.product_url} target='_blank'>Ссылка на товар</a></li>
                </ul>
            </div>
            <div className='working-zone__producer-box'>
                <div className='working-zone__producer-contents'>
                    <h2 className='working-zone__producer-item'>Артикул</h2>
                    <h2 className='working-zone__producer-item'>Название</h2>
                    <h2 className='working-zone__producer-item'>Цена</h2>
                </div>
                <ul className='working-zone__producer-cards'>
                    {
                        currentElement.products.map(product =>
                            <ProducerCard
                                key={product.id}
                                product={product}
                                handleChooseCard={handleChooseCard}
                                proseptId={proseptId}
                                setProseptId={setProseptId}
                            />)
                    }
                </ul>
            </div>
            <div className='working-zone__button-box'>
                <button type='button' className='working-zone__button working-zone__button_type_yes' disabled={!proseptId} onClick={handlePostPair}>Да</button>
                <button type='button' className='working-zone__button working-zone__button_type_not' onClick={handleDeleteItem}>Нет</button>
                <button type='button' className='working-zone__button working-zone__button_type_postpone' onClick={handleMoveToEnd}>Отложить</button>
            </div>
        </div>
    )
}