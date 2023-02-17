import { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar';
import { fetchSearchImg } from './api';
import { ImageGallery } from './ImageGallery';
import { Container } from '../components/App.styled';
import { LoadMore } from './Button';
import { Loader } from './Loader';
import { Error } from './Error/error';
import { NoImg } from './NoImg/NoImg';
import { EndImg } from './EndImg/EndImg';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [imgsOnPage, setImgsOnPage] = useState(0);
  const [error, setError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

useEffect(() => {
    if (!searchValue) {
      return;
    }
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        const images = await fetchSearchImg(searchValue, pageNumber);
        if (images.length < 1) {
          setIsEmpty(true);
           setImgsOnPage(images.length);
          return;
        }
        setImages(prevImg => [...prevImg, ...images]);
        setPageNumber(prevPage => prevPage + 1);
        setImgsOnPage(images.length);
        setIsEmpty(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [images, pageNumber, searchValue]);

  const handleFormSubmit = searchValue => {
    setSearchValue(searchValue);
     setImages([]);
    setPageNumber(1);
  };

  const onLoadMoreClick =  () => {
    setPageNumber(prevPage => prevPage + 1);
    console.log(pageNumber);
    console.log(images);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {images.length > 1 && <ImageGallery items={images} />}
      {imgsOnPage >= 12 && <LoadMore onClick={onLoadMoreClick} />}
      {images.length > 1 && imgsOnPage < 12 && <EndImg />}
      {isEmpty && <NoImg searchValue={searchValue} />}
      {error && <Error />}
    </Container>
  );
};
