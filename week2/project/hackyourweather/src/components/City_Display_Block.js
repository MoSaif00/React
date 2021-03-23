import React from 'react';
import './css/City_Display_Block.css';

function CityDetails(props) {
  const {
    cityName,
    countryName,
    weatherMain,
    weatherDescription,
    maxTemperature,
    minTemperature,
    longitude,
    latitude,
  } = props;

  return (
    <div className="weather_container">
      <h1 className="city_name" key={cityName}>
        {cityName}, <span className="country_name">{countryName} </span>
      </h1>
      <h2 className="weather_main">
        {weatherMain}
        <span className="weather_description">{weatherDescription}</span>
      </h2>
      <h4 className="max_temperature">Max temp : {maxTemperature}</h4>
      <h4 className="min_temperature">Min temp : {minTemperature}</h4>
      <h4 className="location">
        Location : {longitude} , {latitude}
      </h4>
    </div>
  );
}

function CityBlock({cityWeather, hasError}) {
  return (
    <>
      {!hasError &&
        cityWeather.map((weather) => {
          return (
            <CityDetails
              key={weather.name}
              cityName={weather.name}
              countryName={weather.sys.country}
              weatherMain={weather.weather[0].main}
              weatherDescription={weather.weather[0].description}
              maxTemperature={weather.main.temp_max}
              minTemperature={weather.main.temp_min}
              longitude={weather.coord.lon}
              latitude={weather.coord.lat}
            />
          );
        })}
    </>
  );
}

export default CityBlock;
