import React, {useState, useEffect} from 'react';
import Search from '../Search/Search';
import {getAllCards} from '../../utils/Api'
import CardsList from '../CardsList/CardsList';
import CardInterface from '../../models';


function App() {


  const [allEmployees, setAllEmployees] = useState<CardInterface[]>([]);

  function getAllEmployees() {
    getAllCards()
      .then( res => setAllEmployees(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllEmployees();
  }, [])




  return (
    <div className='page'>
      <div className='main'>
        <Search />
        <CardsList allCards={allEmployees} />
      </div>
    </div>
  );
}

export default App;
