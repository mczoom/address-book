import React from 'react'
import CardInterface from '../../models';

interface CardProps {
    card: CardInterface
}

export default function Card({card}: CardProps) {



  return (
    <div className='card'>
        <p className='card__employee-name'>{card.name}</p>
        <p className='card__employee-tel'>{card.phone}</p>
        <p className='card__employee-email'>{card.email}</p>
    </div>
  )
}
