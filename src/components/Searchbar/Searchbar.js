import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func };
  state = { searchValue: '', pageNumber: 1 };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  handleNameChange = e => {
    this.setState({ searchValue: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <FcSearch style={{ width: '2.5em', height: '2.5em' }} />
            <SearchFormButtonLabel className="button-label">
              Search
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            value={this.state.searchValue}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
