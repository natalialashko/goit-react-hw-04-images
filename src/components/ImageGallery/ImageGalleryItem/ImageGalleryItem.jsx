import React, { Component } from 'react';
import { Modal } from '../../Modal/Modal';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
  state = {
  showModal: false,
}
  toggleModal = () => {
     console.log('***')
    this.setState(({ showModal }) =>
      ({ showModal: !showModal }));
  };

  render() {
    const { id, webformatURL, largeImageURL, type } = this.props;
    const { showModal } = this.state;    
    return (
    <>
    
    <li key={id} className={css.gallery_item}>
      <img className={css.gallery_item_img} src={webformatURL}
        alt={type} width="100" onClick={this.toggleModal} />
    </li>
        {showModal && <Modal largeImageURL={largeImageURL} onClick={this.toggleModal} />}
        </>
  );
};
}

// this.props.onClick