import PropTypes from 'prop-types';
import { useState } from 'react';
import { ModalImg } from 'components/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const closeByBackdrop = e => {
           if (e.target === e.currentTarget ) {
      closeModal();
    }
  }

  return (
    <div>
      <GalleryItem key={id}>
        <GalleryImg src={webformatURL} alt={tags} onClick={openModal} />
      </GalleryItem>
      {isModalOpen && (
        <ModalImg
          closeModal={closeModal}
          closeByBackdrop={closeByBackdrop}
          id={id}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      )}
    </div>
  );
};

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
