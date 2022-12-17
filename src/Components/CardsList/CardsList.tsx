import React, {useEffect} from 'react';
import Card from '../Card/Card';
import CardInterface from '../../models';

interface CardListProps {
    allCards: CardInterface[]
    searchedEmployee: CardInterface[]
    handleCardClick: (card: CardInterface) => void
    openPopup: () => void
    notFoundMessage: string
}

export default function CardsList({allCards, searchedEmployee, handleCardClick, openPopup, notFoundMessage}: CardListProps) {

const cards = searchedEmployee.length > 0 ? searchedEmployee : allCards;


  return (
    <section className='cardsList'>
        <ul className='cardsList__cards'>
            {!notFoundMessage && cards.map((card: CardInterface, index: number) => (
                <li key={index}>
                    <Card card={card} handleCardClick={handleCardClick} openPopup={openPopup}/>
                </li>
            ))}
        </ul>
    </section>
  )
}
