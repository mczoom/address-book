import React from 'react'
import Card from '../Card/Card'
import CardInterface from '../../models';

interface CardListProps {
    allCards: CardInterface[]
}

export default function CardsList({allCards}: CardListProps) {



  return (
    <section className='cardsList'>
        <ul className='cardsList__cards'>
            {allCards.map((card: CardInterface, index: number) => (
                <li className='cardsList__card' key={index}>
                    <Card card={card}/>
                </li>
            ))}
        </ul>
    </section>
  )
}
