import React, { useEffect, useState } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import css from './ImageGallery.module.css';
// import { Modal} from '../Modal/Modal';



export const ImageGallery = ({ currentValueSearch }) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [totalHits, setTotalHits] = useState(0);
 const [prevValueSearch, setPrevValueSearch] = useState('')
  console.log('currentPage',currentPage);
  console.log('totalHits', totalHits);
  console.log('images', images);
  console.log('currentValueSearch--',currentValueSearch )
  

  useEffect(() => {
   
    if (!currentValueSearch) { return }
    if (prevValueSearch !== currentValueSearch) {
      setImages([]);
      setCurrentPage(1)
    }
         fetch(
        `https://pixabay.com/api/?q=${currentValueSearch}&page=${currentPage}&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              `Згідно Вашого запиту ${currentValueSearch} картинки відсутні, введіть новий запит`
            )
          );
        })
        .then(imagesArr => {
           setImages([...images, ...imagesArr.hits]);
          setStatus('resolved');
          setTotalHits(imagesArr.totalHits);
                   
          }
        )
        .catch(error => {
          setError(error);
          setStatus('rejected');
          setCurrentPage(1);
          setVisible(false);
          setTotalHits(0);
          setImages([]) 
        })
    setPrevValueSearch(currentValueSearch)
  }, [currentValueSearch, currentPage]);



  const handleLoadMoreClick = () => {
    console.log('клік по LoadMore');
    setCurrentPage((prev) => prev + 1);
    console.log('currentPage--',currentPage)
  }


  if (status === 'idle') {
      return <div>Введіть параметри пошуку</div>;
    }
    if (status === 'pending') {
      return <div>Іде загрузка...</div>;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={css.gallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                
              />
            ))}
          </ul>
          {images.length < totalHits &&
          <Button onClick={handleLoadMoreClick} visible={visible} />
            } 
                  
        </>
      );
    }
  
  }





// export class ImageGallery extends Component {
//   state = {
//     images: [],
//     currentPage: 1,
//    visible: true,
//     error: null,
//     status: 'idle',
//     totalHits: 0,
    
//   };

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.currentValueSearch;
//       const nextName = this.props.currentValueSearch;
//       const currentPage = this.state.currentPage;
//     if (prevName !== nextName) {
//       console.log('Змінились параметри пошуку');
//       console.log('prevProps.currentValueSearch:', prevName);
//       console.log('this.props.currentValueSearch:', nextName);
//       console.log('this.props.currentPage:', currentPage);
//        console.log('prev.currentPage:', prevProps.currentPage);
//       this.setState({ status: 'pending', currentPage: 1});
     
  //     fetch(
  //       `https://pixabay.com/api/?q=${nextName}&page=1&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         return Promise.reject(
  //           new Error(
  //             `Згідно Вашого запиту ${nextName} картинки відсутні, введіть новий запит`
  //           )
  //         );
  //       })
  //       .then(images => this.setState({ images: images.hits , status: 'resolved', totalHits: images.totalHits  }))
  //       .catch(error => this.setState({ error, status: 'rejected', currentPage: 1  }))
       
  //   }
  // }


  // fetchImages = () => {
  //   const currentPage = this.state.currentPage;
  //   const nextName = this.props.currentValueSearch;
  //   const arrayImage = this.state.images;

  //   console.log('this.state.currentPage', currentPage);
  //   console.log('nextName', nextName);
  //   console.log('arrayImage', arrayImage);

  //    fetch(
  //       `https://pixabay.com/api/?q=${nextName}&page=${currentPage}&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(response => {
  //         if (response.ok) {
           
  //           return response.json();
  //         }
  //         return Promise.reject(
  //           new Error(
  //             `Згідно Вашого запиту ${nextName} картинки відсутні, введіть новий запит`
  //           )
  //         );
  //       })
  //     .then(images => this.setState({ images:[...arrayImage, ...images.hits], status: 'resolved', visible: true }))
  //     .catch(error => this.setState({ error, status: 'rejected',visible: false, currentPage: 1 }));
  //   console.log(this.state.images)
   
  // }

  // hendleLoadMoreClick = () => {
  //   this.setState(prevState => ({
  //     currentPage: prevState.currentPage + 1,
  //     visible:false,
  //   }), this.fetchImages);
  // }

//   render() {
//     const { images, error, status, visible, totalHits } = this.state;
    
//     if (status === 'idle') {
//       return <div>Введіть параметри пошуку</div>;
//     }
//     if (status === 'pending') {
//       return <div>Іде загрузка...</div>;
//     }
//     if (status === 'rejected') {
//       return <h2>{error.message}</h2>;
//     }
//     if (status === 'resolved') {
//       return (
//         <>
//           <ul className={css.gallery}>
//             {images.map(image => (
//               <ImageGalleryItem
//                 key={image.id}
//                 webformatURL={image.webformatURL}
//                 largeImageURL={image.largeImageURL}
                
//               />
//             ))}
//           </ul>
//            {images.length<totalHits && <Button onClick={this.hendleLoadMoreClick} visible={visible} />}
                  
//         </>
//       );
//     }
  
//   }
// }

//888888888888888888888888888888
//  useEffect(() => {
//     if (!currentValueSearch) {
//       return
//     }

//     if (currentPage === 1) {
//        fetch(
//       `https://pixabay.com/api/?q=${currentValueSearch}&page=1&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         return Promise.reject(
//           new Error(
//             `Згідно Вашого запиту ${currentValueSearch} картинки відсутні, введіть новий запит`
//           )
//         );
//       })
//       .then(images => {
//         setImages(images.hits);
//         setStatus('resolved');
//         setTotalHits(images.totalHits)
//           })
//       .catch(error => {
//         setError(error);
//         setStatus('rejected');
//         setCurrentPages(1);
       
      
       
//       })
//     } else {
//       fetch(
//         `https://pixabay.com/api/?q=${currentValueSearch}&page=${currentPage}&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(
//             new Error(
//               `Згідно Вашого запиту ${currentValueSearch} картинки відсутні, введіть новий запит`
//             )
//           );
//         })
//        .then(imagesArr => {
//         setImages([...images, ...imagesArr.hits]);
//         setStatus('resolved');
//          setVisible(true);

//        })
//        .catch(error =>
//        {
//          setError(error);
//         setStatus('rejected');
//          setCurrentPages(1);
//          setVisible(false);
         
    
//        }
//        );
//     }
   
        
//   }, [currentValueSearch, currentPage]);
