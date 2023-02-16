import PropTypes from 'prop-types';
import { SiLinux } from 'react-icons/si';

export const NoImg = ({ searchValue }) => {
  return (
    <p style={{ textAlign: 'center', color: 'blue', fontSize: '24px' }}>
      Sorry. There are no images width name{' '}
      <b style={{ color: 'tomato' }}>{searchValue}</b>
      <SiLinux style={{ width: '2em', height: '2em' }} /> Try again
    </p>
  );
};

 NoImg.propTypes = {
    searchValue: PropTypes.string.isRequired,
  };