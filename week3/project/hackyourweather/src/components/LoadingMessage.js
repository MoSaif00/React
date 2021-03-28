import React from 'react';
import './css/LoadingMessage.css';

function Loading(props) {
  const {isLoading, searchCity} = props;
  return (
    <>
      {isLoading && (
        <p className="loading_message">
          "<strong>{searchCity}</strong>" data is loading ...
        </p>
      )}
    </>
  );
}

export default Loading;
