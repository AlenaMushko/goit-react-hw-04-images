import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalImg } from 'components/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        onImageClick: PropTypes.func,
      })
    ),
  };
  state = { isModalOpen: false };
  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <GalleryItem key={id} onClick={this.openModal}>
          <GalleryImg src={webformatURL} alt={tags} />
        </GalleryItem>
        {isModalOpen && (
          <ModalImg
            onClose={this.closeModal}
            id={id}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        )}
      </div>
    );
  }
}
