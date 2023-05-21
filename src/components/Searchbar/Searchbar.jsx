import React, { Component } from 'react';
import css from './Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    valueSearch: '',
  };

handleInputChange = e => {
   this.setState({ valueSearch: e.currentTarget.value.toLowerCase() });
    };
    
handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.valueSearch.trim() === '') {
        alert('Введіть назву для пошуку');
        return;
    }
    this.props.functionCurrentValueSearch(this.state.valueSearch);
    this.setState({ valueSearch: '' })
   
    };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm_button} >
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.valueSearch}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
