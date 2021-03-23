import React, {useState, useEffect} from 'react';
import Joke from './joke';
import Button from './button';
import '../style/randomJoke.css';

function RandomJoke() {
  const [joke, setJoke] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fetchNewJoke = async () => {
    const jokeURL = 'https://official-joke-api.appspot.com/random_joke';
    setLoading(true);
    try {
      const res = await fetch(jokeURL);
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewJoke();
  }, []);

  return (
    <div className="jokes_container">
      {!hasError && (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      )}
      <Button buttonText="New random joke" onClick={fetchNewJoke} />
      {isLoading && <p className="loading_message">New joke is Loading ...</p>}

      {hasError && (
        <p className="error_message">
          Oops... something went wrong with bringing new Joke to you
        </p>
      )}
    </div>
  );
}

export default RandomJoke;
