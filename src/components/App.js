import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { fetchSearchImg } from './api';
import { ImageGallery } from './ImageGallery';
import { Container } from '../components/App.styled';
import { LoadMore } from './Button';
import { Loader } from './Loader';
import { Error } from './Error/error';
import { NoImg } from './NoImg/NoImg';
import { EndImg } from './EndImg/EndImg';

export class App extends Component {
  state = {
    searchValue: '',
    imgs: [],
    pageNumber: 1,
    isLoading: false,
    imgsOnPage: 0,
    error: '',
    isEmpty: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchValue, pageNumber } = this.state;
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.pageNumber !== this.state.pageNumber
    ) {
      try {
        this.setState({ isLoading: true });
        const imgs = await fetchSearchImg(searchValue, pageNumber);
        if (imgs.length < 1) {
          this.setState({ isEmpty: true });
          return;
        }
        this.setState(state => ({
          imgs: [...state.imgs, ...imgs],
          imgsOnPage: imgs.length,
          isEmpty: false,
        }));
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue, pageNumber: 1, imgs: [] });
  };

  onLoadMoreClick = async () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  render() {
    const { imgs, isLoading, imgsOnPage, error, isEmpty, searchValue } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {imgs.length > 1 && <ImageGallery items={imgs} />}
        {imgsOnPage >= 12 && <LoadMore onClick={this.onLoadMoreClick} />}
        {imgs.length > 1 && imgsOnPage < 12 && <EndImg />}
        {isEmpty && <NoImg searchValue={searchValue} />}
        {error && <Error />}
      </Container>
    );
  }
}
