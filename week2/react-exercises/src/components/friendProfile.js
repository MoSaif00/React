import React from 'react';

function FriendProfile(props) {
  const {
    title,
    firstName,
    lastName,
    streetNumber,
    streetName,
    city,
    postCode,
    country,
    emailAddress,
    phoneNumber,
  } = props;

  return (
    <>
      <ul className="friend_list">
        <li>
          {title}. {firstName} {lastName}
        </li>
        <li>
          <span>Address :</span> {streetName} {streetNumber}, {city}, {postCode}
        </li>
        <li>
          <span>Country : </span>
          {country}
        </li>
        <li>
          <span>Email Address :</span> {emailAddress}
        </li>
        <li>
          <span>Phone Number :</span> {phoneNumber}
        </li>
      </ul>
    </>
  );
}

export default FriendProfile;
