import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {

  componentDidMount() {
    console.log('Modal componentDidMount');
    console.log(this.props);
    window.addEventListener('keydown', this.handlePressESC)
  }

  componentWillUnmount() {
   window.removeEventListener('keydown', this.handlePressESC)
}

  handlePressESC = (e) => {
    if (e.code === 'Escape')
  this.props.onClick()
  }
  handleClose = () => {
    this.props.onClick()
  }

  render() {
     console.log('пропс на модалці--', this.props.largeImageURL) ;
    return createPortal(
     <div className={css.overlay} onClick={this.handleClose}>
        <div className={css.modal}>
               
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>, modalRoot

    );
  }
}

 