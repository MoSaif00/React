import React from 'react';
import SearchButton from './SearchButton';
import Error from './ErrorMessage';
import './css/SearchForm.css';

function SearchForm(props) {
  const {searchedCity, hasError, onClick, onInputChange, onSubmit} = props;
  return (
    <div className="form_container">
      <form onSubmit={onSubmit}>
        <input
          className="input_field"
          type="search"
          value={searchedCity}
          onChange={onInputChange}
          placeholder="Enter a city name ..."
          required
        />

        <SearchButton buttonContent="SEARCH" onClick={onClick} />
        <Error hasError={hasError} />
      </form>
    </div>
  );
}

export default SearchForm;
