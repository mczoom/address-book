import React from 'react';
import CardInterface from '../../models';

interface CardPopupProps {
    card?: CardInterface | null
    isPopupOpen: boolean
    closePopup: () => void
}

export default function CardPopup({card, isPopupOpen, closePopup}: CardPopupProps) {

    const popupClassName = `${isPopupOpen ? 'card-popup' : 'card-popup_hidden'}`

    function ClosePopupByOverlayClick (e: React.SyntheticEvent) {
        if(e.target === e.currentTarget) {
            closePopup();
        }
    }


  return (
    <div className={popupClassName} onClick={ClosePopupByOverlayClick}>
        <div className='card-popup__container'>
            <button className='card-popup__close-btn' type='button' onClick={closePopup}></button>
            <p className='card-popup__name'>{card?.name}</p>
            <div className='container__info-row'>
                <p className='info-row__title'>Телефон:</p>
                <p className='info-row__value'>{card?.phone}</p>
            </div>
            <div className='container__info-row'>
                <p className='info-row__title'>Почта:</p>
                <p className='info-row__value'>{card?.email}</p>
            </div>
            <div className='container__info-row'>
                <p className='info-row__title'>Дата приема:</p>
                <p className='info-row__value'>{card?.hire_date}</p>
            </div>
            <div className='container__info-row'>
                <p className='info-row__title'>Должность:</p>
                <p className='info-row__value'>{card?.position_name}</p>
            </div>
            <div className='container__info-row'>
                <p className='info-row__title'>Подразделение:</p>
                <p className='info-row__value'>{card?.department}</p>
            </div>
            <p>Дополнительная информация:</p>
            <p className='info-row__value'>{card?.address}</p>
        </div>
    </div>
  )
}
