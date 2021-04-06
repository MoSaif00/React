import React from 'react';
import './css/Search_Button.css';

function SearchButton({buttonContent, onClick}) {
  return (
    <>
      <button className="search_button" onClick={onClick}>
        {buttonContent}
      </button>
    </>
  );
}

export default SearchButton;
