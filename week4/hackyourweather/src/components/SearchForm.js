import React from 'react';
import SearchButton from './SearchButton';
import Error from './ErrorMessage';

import './css/SearchForm.css';

function SearchForm(props) {
  const {searchedCity, hasError, onClick, onInputChange, onSubmit} = props;

  const disabled = searchedCity.trim() === '' ? true : false;

  return (
    <div className="form_container">
      <form onSubmit={onSubmit}>
        <input
          className="input_field"
          type="search"
          value={searchedCity}
          onChange={onInputChange}
          placeholder="Enter a city name ..."
        />
        <SearchButton
          buttonContent="SEARCH &#128270;"
          onClick={onClick}
          disabled={disabled}
        />

        <Error hasError={hasError} />
      </form>
    </div>
  );
}

export default SearchForm;
