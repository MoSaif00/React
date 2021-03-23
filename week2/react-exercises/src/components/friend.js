import React, {useState} from 'react';
import Button from './button';
import FriendProfile from './friendProfile';
import '../style/friend.css';

function Friend() {
  const [friend, setFriend] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [newFriend, setNewFriend] = useState(false);

  const getFriend = async () => {
    const friendsURL = 'https://www.randomuser.me/api?results=1';
    setLoading(true);
    try {
      const res = await fetch(friendsURL);
      const data = await res.json();
      setFriend({...data.results[0]});
      setNewFriend(true);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="friends_container">
      <Button buttonText="Get a new friend" onClick={getFriend} />
      {isLoading && <p className="loading_message">Friend is Loading ...</p>}
      {newFriend && (
        <img
          className="friend_img"
          src={friend.picture.large}
          alt="friend img"
        />
      )}
      {newFriend && (
        <FriendProfile
          key={Math.random() * 10}
          title={friend.name.title}
          firstName={friend.name.first}
          lastName={friend.name.last}
          streetNumber={friend.location.street.number}
          streetName={friend.location.street.name}
          city={friend.location.city}
          postCode={friend.location.postcode}
          country={friend.location.country}
          emailAddress={friend.email}
          phoneNumber={friend.phone}
        />
      )}
      {hasError && (
        <p className="error_message">
          Oops... something went wrong with bringing new friend to you
        </p>
      )}
    </div>
  );
}
export default Friend;
