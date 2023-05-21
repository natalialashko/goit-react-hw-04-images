import React from 'react';
import css from './Button.module.css'

export const Button = ({onClick, visible}) => {
 
        return visible && (
          <button type="submit" className={css.btn_load_more} onClick={onClick} >Load more</button> ) 
        
  
}
