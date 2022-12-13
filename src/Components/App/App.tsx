import React, {useState, useEffect} from 'react';
import Search from '../Search/Search';
import {getAllCards} from '../../utils/Api'
import CardsList from '../CardsList/CardsList';
import Card from '../Card/Card';
import CardPopup from '../CardPopup/CardPopup';
import CardInterface from '../../models';


function App() {

  const [allEmployees, setAllEmployees] = useState<CardInterface[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  function getAllEmployees() {
    getAllCards()
      .then( res => setAllEmployees(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllEmployees();
  }, [])

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleCardClick(card: CardInterface) {
    setSelectedCard(card);
  }




  return (
    <div className='page'>
      <div className='main'>
        <Search />
        <CardsList allCards={allEmployees} handleCardClick={handleCardClick} openPopup={openPopup}/>
        <CardPopup card={selectedCard} isPopupOpen={isPopupOpen} closePopup={closePopup}/>
      </div>
    </div>
  );
}

export default App;
