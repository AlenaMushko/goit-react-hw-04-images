import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class ModalImg extends Component {
  static propTypes = {
    id: PropTypes.number,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }
  handelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { id, largeImageURL, tags, onClose } = this.props;
    return createPortal(
      <Overlay onClick={onClose}>
        <div className="modal" kay={id}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </Overlay>,
      modalRoot
    );
  }
}
