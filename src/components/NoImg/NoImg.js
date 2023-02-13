import { Component } from 'react';
import PropTypes from 'prop-types';
import { SiLinux } from 'react-icons/si';

export class NoImg extends Component {
  static propTypes = {
    searchValue: PropTypes.string.isRequired,
  };
  render() {
    const { searchValue } = this.props;
    return (
      <p style={{ textAlign: 'center', color: 'blue', fontSize: '24px' }}>
        Sorry. There are no images width name{' '}
        <b style={{ color: 'tomato' }}>{searchValue}</b>
        <SiLinux style={{ width: '2em', height: '2em' }} /> Try again
      </p>
    );
  }
}
