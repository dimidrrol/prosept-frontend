import './ProducerCard.scss';

export default function ProducerCard() {
    return (
        <button className='producer-card'>
            <p className='producer-card__item'>Артикул товара</p>
            <p className='producer-card__item'>Название товара</p>
            <p className='producer-card__item'>Цена товара</p>
        </button>
    )
}