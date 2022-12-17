import React, {useState, useEffect} from 'react';
import Search from '../Search/Search';
import {getAllCards} from '../../utils/Api'
import CardsList from '../CardsList/CardsList';
import CardPopup from '../CardPopup/CardPopup';
import CardInterface from '../../models';


function App() {

  const [allEmployees, setAllEmployees] = useState<CardInterface[]>([]);
  const [searchedEmployee, setSearchedEmployee] = useState<CardInterface[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [notFoundMessage, setNotFoundMessage] = useState<string>('')

  function getAllEmployees() {
    getAllCards()
      .then( res => setAllEmployees(res))
      .catch((err) => console.log(err));
  }

  function searchEmployee (searchQuery: string) {
    setNotFoundMessage('');
    const searchedName = allEmployees.filter((card) => card.name.toLowerCase().includes(searchQuery));
    if(searchedName.length === 0) {
      setNotFoundMessage('Работник не найден');
    }
    setSearchedEmployee(searchedName);
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
        <Search handleSearch={searchEmployee} searchMessage={notFoundMessage} />
        <CardsList allCards={allEmployees} searchedEmployee={searchedEmployee} handleCardClick={handleCardClick} openPopup={openPopup} notFoundMessage={notFoundMessage}/>
        <CardPopup card={selectedCard} isPopupOpen={isPopupOpen} closePopup={closePopup}/>
      </div>
    </div>
  );
}

export default App;
