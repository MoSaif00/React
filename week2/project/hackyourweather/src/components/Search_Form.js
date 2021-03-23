import React from 'react';
import SearchButton from './Search_Button';
import Error from './Error_Message';
import './css/Search_Form.css';

function SearchForm(props) {
  const {searchCity, hasError, onClick, onInputChange, onSubmit} = props;
  return (
    <div className="form_container">
      <form onSubmit={onSubmit}>
        <input
          className="input_field"
          type="search"
          value={searchCity}
          onChange={onInputChange}
          placeHolder="Enter a city name ..."
          required
        />

        <SearchButton buttonContent="SEARCH" onClick={onClick} />
        <Error hasError={hasError} />
      </form>
    </div>
  );
}

export default SearchForm;
