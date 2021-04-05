import React from 'react';
import './css/LoadingMessage.css';

function Loading(props) {
  const {isLoading} = props;
  return (
    <>{isLoading && <p className="loading_message">data is loading ...</p>}</>
  );
}

export default Loading;
