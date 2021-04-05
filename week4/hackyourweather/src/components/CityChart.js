import React from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';

import './css/Header.css';
function CityChart() {
  const {cityId} = useParams();
  const history = useHistory();

  function handleHeaderClick() {
    history.push('/');
  }
  return (
    <div className="header">
      <h1 onClick={handleHeaderClick}>5 day forecast</h1>
      <p>{cityId}</p>
      <Link to="/">{<button className="back_button">Go back</button>}</Link>
    </div>
  );
}

export default CityChart;
