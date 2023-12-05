import { useSelector } from 'react-redux';
import './ProducerCard.scss';

export default function ProducerCard({ product, handleChooseCard, proseptId, setProseptId }) {

    const handleReset = (e) => {
        e.stopPropagation();
        setProseptId('');
    }
    return (
        <li className={`producer-card${+proseptId === product.id ? ' producer-card_chosen' : ''}`} id={product.id} onClick={handleChooseCard}>
            <p className='producer-card__item'>{product.cost}</p>
            <p className='producer-card__item producer-card__item_name'>{product.name_1c}</p>
            <p className='producer-card__item'>{product.article} руб.</p>
            <button className='producer-card__btn' onClick={handleReset}>✖</button>
        </li>
    )
}   