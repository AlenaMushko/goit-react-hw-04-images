import { Button } from './Button.styled';
import PropTypes from 'prop-types';
export function LoadMore({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
}

LoadMore.propTypes = {
  onClick: PropTypes.func,
};
