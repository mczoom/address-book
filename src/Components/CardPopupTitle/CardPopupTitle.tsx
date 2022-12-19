import React from 'react';
import {CardInterface, InfoElement} from '../../models';


interface TitleProps {
    card?: CardInterface | null
    el: InfoElement
    i: number
}

export default function CardPopupTitle({card, el, i}: TitleProps) {

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



  return (
    <div className='container__info-row' key={i}>
        <p className='info-row__title'>{el.title}</p>
        <p className='info-row__value'>{el.titleValue || ''}</p>
    </div>
  )
}
