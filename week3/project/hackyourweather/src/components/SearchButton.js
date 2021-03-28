import React from 'react';
import './css/SearchButton.css';

function SearchButton(props) {
  const {buttonContent, onClick} = props;

  return (
    <>
      <button className="search_button" onClick={onClick}>
        {buttonContent}
      </button>
    </>
  );
}

export default SearchButton;
