import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

const handleSubmit = e => {
    e.preventDefault();
  onSubmit(searchValue);
  setSearchValue('');
  };

  const handleNameChange = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" className="button">
          <FcSearch style={{ width: '2.5em', height: '2.5em' }} />
          <SearchFormButtonLabel className="button-label">
            Search
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          value={searchValue}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func };