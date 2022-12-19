import React from 'react';
import {CardInterface} from '../../models';
import callIcon from '../../images/icon-call.png';
import emailIcon from '../../images/icon-mail.png';


interface CardProps {
    card: CardInterface
    handleCardClick: (card: CardInterface) => void
    openPopup: () => void
}

export default function Card({card, handleCardClick, openPopup}: CardProps) {

function onCardClick() {
    handleCardClick(card);
    openPopup();
}

  return (
    <div className='card' onClick={onCardClick}>
        <p className='card__employee-name'>{card.name}</p>
        <div className='card__wrap'>
            <img className='card__icon' src={callIcon}></img>
            <p className='card__employee-info'>{card.phone}</p>
        </div>
        <div className='card__wrap'>
            <img className='card__icon' src={emailIcon}></img>
            <p className='card__employee-info'>{card.email}</p>
        </div>
    </div>
  )
}
