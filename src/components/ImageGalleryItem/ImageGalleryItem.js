import PropTypes from 'prop-types';
import { useState } from 'react';
import { ModalImg } from 'components/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true );

 const closeModal = () => setIsModalOpen(false);

    return (
      <div>
        <GalleryItem key={id} onClick={openModal}>
          <GalleryImg src={webformatURL} alt={tags} />
        </GalleryItem>
        {isModalOpen && (
          <ModalImg
            onClose={closeModal}
            id={id}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        )}
      </div>
    );
  }


ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        onImageClick: PropTypes.func,
      })
    ),
  };