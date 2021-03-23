import React from 'react';
import './css/Error_Message.css';

function Error(props) {
  const {hasError} = props;
  return (
    <>
      {hasError.show === true && (
        <p className="error_message">{hasError.error}</p>
      )}
    </>
  );
}

export default Error;
