import React from 'react';
import CardInterface from '../../models';

interface CardPopupProps {
    card?: CardInterface | null
    isPopupOpen: boolean
    closePopup: () => void
}

interface InfoElement {
    title: string
    titleValue: string | undefined
}

export default function CardPopup({card, isPopupOpen, closePopup}: CardPopupProps) {

    const popupClassName = `${isPopupOpen ? 'card-popup' : 'card-popup_hidden'}`;

    const titles = [
        {
          'title': 'Телефон:',
          'titleValue': card?.phone,
        },
        {
          'title': 'Почта:',
          'titleValue': card?.email,
        },
        {
          'title': 'Дата приема:',
          'titleValue': card?.hire_date,
        },
        {
          'title': 'Должность:',
          'titleValue': card?.position_name,
        },
        {
          'title': 'Подразделение:',
          'titleValue': card?.department,
        },
    ];

    function ClosePopupByOverlayClick (e: React.SyntheticEvent) {
        if(e.target === e.currentTarget) {
            closePopup();
        }
    };


  return (
    <div className={popupClassName} onClick={ClosePopupByOverlayClick}>
        <div className='card-popup__container'>
            <button className='card-popup__close-btn' type='button' onClick={closePopup}></button>
            <p className='card-popup__name'>{card?.name}</p>
            <>
              {titles.map((el: InfoElement) => (
                <div className='container__info-row'>
                <p className='info-row__title'>{el.title}</p>
                <p className='info-row__value'>{el.titleValue || ''}</p>
                </div>
              ))}
            </>
            <p>Дополнительная информация:</p>
            <p className='info-row__value'>{card?.address}</p>
        </div>
    </div>
  )
}
