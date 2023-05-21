import React, { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import css from './App.module.css';


export const App = () => {
  const [currentValueSearch, setCurrentValueSearch] = useState('');

  const handleFormSubmit = currentValueSearch => {
   setCurrentValueSearch(currentValueSearch)
    //  this.setState({ currentValueSearch });
   };
  return (
      <div className={css.app}>
        <Searchbar functionCurrentValueSearch={handleFormSubmit} />
        <ImageGallery currentValueSearch={currentValueSearch} />
       
      </div>
  );
}




// export class App extends Component {
//   state = {
//     currentValueSearch: '',
//     isShowModal: false,
//   };

//   handleFormSubmit = currentValueSearch => {
//     this.setState({ currentValueSearch });
//   };

//   toggleModal = () => {
//     this.setState(({ isShowModal }) =>
//       ({ isShowModal: !isShowModal }));
//   };

//   render() {
//     const { currentValueSearch } = this.state;
    
//     return (
      // <div
      //   className={css.app}
       
      // >
      //   <Searchbar functionCurrentValueSearch={this.handleFormSubmit} />
      //   <ImageGallery currentValueSearch={currentValueSearch} />
       
      // </div>
//     );
//   }
// }
