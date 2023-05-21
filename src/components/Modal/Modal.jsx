import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');



export const Modal = ({ largeImageURL, onClick }) => {

  useEffect(() => {
 const handlePressESC = (e) => {
    if (e.code === 'Escape')
  onClick()
  }

    window.addEventListener('keydown', handlePressESC)
    return () => {
     window.removeEventListener('keydown', handlePressESC)
    }
},[onClick])


 
  const handleClose = () => {
    onClick()
  }

  return (
   createPortal(
     <div className={css.overlay} onClick={handleClose}>
        <div className={css.modal}>
               
          <img src={largeImageURL} alt="" />
        </div>
      </div>, modalRoot

    )
  );
}

