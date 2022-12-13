import React from 'react';
import Card from '../Card/Card';
import CardInterface from '../../models';

interface CardListProps {
    allCards: CardInterface[]
    handleCardClick: (card: CardInterface) => void
    openPopup: () => void
}

export default function CardsList({allCards, handleCardClick, openPopup}: CardListProps) {



  return (
    <section className='cardsList'>
        <ul className='cardsList__cards'>
            {allCards.map((card: CardInterface, index: number) => (
                <li key={index}>
                    <Card card={card} handleCardClick={handleCardClick} openPopup={openPopup}/>
                </li>
            ))}
        </ul>
    </section>
  )
}
