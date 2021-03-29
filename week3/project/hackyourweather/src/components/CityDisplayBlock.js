import React from 'react';
import './css/CityDisplayBlock.css';
import DeleteButton from './DeleteButton';
function CityDetails(props) {
  const {handleDelete, weather} = props;

  return (
    <div className="weather_container">
      <h1 className="city_name">
        {weather.name},{' '}
        <span className="country_name">{weather.sys.country} </span>
      </h1>
      <h2 className="weather_main">
        {weather.weather[0].main}
        <span className="weather_description">
          {weather.weather[0].description}
        </span>
      </h2>
      <h4 className="max_temperature">Max temp : {weather.main.temp_max}</h4>
      <h4 className="min_temperature">Min temp : {weather.main.temp_min}</h4>
      <h4 className="location">
        Location : {weather.coord.lon} , {weather.coord.lat}
      </h4>
      <DeleteButton handleDeleteOnClick={handleDelete} />
    </div>
  );
}

export default CityDetails;
