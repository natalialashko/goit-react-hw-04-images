import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    currentValueSearch: '',
    isShowModal: false,
  };

  handleFormSubmit = currentValueSearch => {
    this.setState({ currentValueSearch });
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) =>
      ({ isShowModal: !isShowModal }));
  };

  render() {
    const { currentValueSearch } = this.state;
    // console.log('currentValueSearch в APP-',this.state.currentValueSearch);
    return (
      <div
        className={css.app}
       
      >
        <Searchbar functionCurrentValueSearch={this.handleFormSubmit} />
        <ImageGallery currentValueSearch={currentValueSearch} />
        {/* {this.state.isShowModal && <Modal closeModal={this.toggleModal} />} */}
      </div>
    );
  }
}
