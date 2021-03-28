import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter_container">
      <Button handleClick={handleClick} />
      <Count count={count} />
      <p className="counter_notification">{feedback}</p>
    </div>
  );
}

function Count(props) {
  const {count} = props;
  return <h1 className="counter_display">{count}</h1>;
}

function Button(props) {
  const {handleClick} = props;
  return (
    <button onClick={handleClick} className="add_btn">
      Add 1
    </button>
  );
}

export default Counter;
