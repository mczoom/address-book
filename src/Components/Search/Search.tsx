import React, { useState } from 'react'

interface searchProps {
  handleSearch: (query: string) => void
  searchMessage: string
}

export default function Search({handleSearch, searchMessage}: searchProps) {

  const [inputValue, setInputValue] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function search(e: React.SyntheticEvent) {
    e.preventDefault();
    handleSearch(inputValue);
  }


  return (
    <>
    <form className='search' method="GET">
        <input className='search__input' type='search' value={inputValue || ''} onChange={handleInputChange}></input>
        <button className='search__button' type='submit' onClick={search}></button>
        <span className='search__error'>{searchMessage}</span>
    </form>

    </>
  )
}
