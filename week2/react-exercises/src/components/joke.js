import React from 'react';

function Joke(props) {
  const {setup, punchline} = props;

  return (
    <>
      <p className="setup_joke">{setup}</p>
      <p className="punchline_joke">{punchline}</p>
    </>
  );
}

export default Joke;
