import React, { useState } from 'react';
import css from './Searchbar.module.css'



export const Searchbar = ({ functionCurrentValueSearch }) => {
  const [valueSearch, setValueSearch] = useState('');

  const handleInputChange = e => {
  setValueSearch(e.currentTarget.value.toLowerCase())
  //  this.setState({ valueSearch: e.currentTarget.value.toLowerCase() });
    };
    
const handleSubmit = evt => {
    evt.preventDefault();

    if (valueSearch.trim() === '') {
        alert('Введіть назву для пошуку');
        return;
    }
  functionCurrentValueSearch(valueSearch);
  setValueSearch('')
    // this.setState({ valueSearch: '' })
   
    };

  return (
    <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchForm_button} >
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={valueSearch}
            onChange={handleInputChange}
          />
        </form>
      </header>
  );
}


