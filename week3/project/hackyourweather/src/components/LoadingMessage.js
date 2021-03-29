import React from 'react';
import './css/LoadingMessage.css';

function Loading(props) {
  const {isLoading, searchedCity} = props;
  return (
    <>
      {isLoading && (
        <p className="loading_message">
          "<strong>{searchedCity}</strong>" data is loading ...
        </p>
      )}
    </>
  );
}

export default Loading;
