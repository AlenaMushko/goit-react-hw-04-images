import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export const ModalImg = ({ id, tags, largeImageURL, onClose }) => {
  useEffect(() => {
    const handelKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handelKeyDown);
    return () => window.removeEventListener('keydown', handelKeyDown);
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <div className="modal" kay={id}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </Overlay>,
    modalRoot
  );
};

ModalImg.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};
