import React from 'react';

function DogPhoto(props) {
  const {dogImg} = props;
  return (
    <>
      <img className="dog_photo" src={dogImg} alt="" />
    </>
  );
}

export default DogPhoto;
