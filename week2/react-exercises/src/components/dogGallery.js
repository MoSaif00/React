import React, {useState} from 'react';
import DogPhoto from './dogPhoto';
import Button from './button';
import '../style/dogGallery.css';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getDogPhoto = async () => {
    const dogURL = 'https://dog.ceo/api/breeds/image/random';
    setLoading(true);
    try {
      const res = await fetch(dogURL);
      const data = await res.json();
      setDogPhotos([data.message, ...dogPhotos]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new_dog_container">
      <Button buttonText="Get a new dog" onClick={getDogPhoto} />
      {isLoading && <p className="loading_message">New dog is Loading ...</p>}
      {!hasError &&
        dogPhotos.map((photo) => <DogPhoto key={photo} dogImg={photo} />)}
      {hasError && (
        <p className="error_message">
          Oops... something went wrong with bringing new dog image to you
        </p>
      )}
    </div>
  );
}

export default DogGallery;
