import React from 'react';
import CardInterface from '../../models';

interface CardPopupProps {
    card?: CardInterface | null
    isPopupOpen: boolean
    closePopup: () => void
}

export default function CardPopup({card, isPopupOpen, closePopup}: CardPopupProps) {

    const popupClassName = `${isPopupOpen ? 'card-popup' : 'card-popup_hidden'}`


  return (
    <div className={popupClassName}>
        <div className='card-popup__container'>
            <button className='card-popup__close-btn' type='button' onClick={closePopup}></button>
            <p className='card-popup__name'>{card?.name}</p>
            <div className='card-popup__info-wrap'>
                <div className='info-wrap__column'>
                    <p>Телефон:</p>
                    <p>Почта:</p>
                    <p>Дата приема:</p>
                    <p>Должность:</p>
                    <p>Подразделение:</p>
                </div>
                <div className='info-wrap__column'>
                    <p>{card?.phone}</p>
                    <p>{card?.email}</p>
                    <p>{card?.hire_date}</p>
                    <p>{card?.position_name}</p>
                    <p>{card?.department}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
