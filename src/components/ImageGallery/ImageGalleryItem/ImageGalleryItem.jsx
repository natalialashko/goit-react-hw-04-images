import React, {  useState } from 'react';
import { Modal } from '../../Modal/Modal';
import css from './ImageGalleryItem.module.css'



export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, type }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
  setShowModal(prevShowModal => !prevShowModal)
    //  console.log('***')
    // this.setState(({ showModal }) =>
    //   ({ showModal: !showModal }));
  };
  return (
    <div>
       <li key={id} className={css.gallery_item}>
      <img className={css.gallery_item_img} src={webformatURL}
        alt={type} width="100" onClick={toggleModal} />
    </li>
        {showModal && <Modal largeImageURL={largeImageURL} onClick={toggleModal} />}
    </div>
  );
}


