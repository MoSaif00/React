import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import CityDetails from './components/CityDisplayBlock';
import Loading from './components/LoadingMessage';

import './App.css';

function App() {
  const [searchCity, setSearchCity] = useState('');
  const [cityWeather, setCityWeather] = useState([]);
  const [hasError, setError] = useState({
    show: false,
    error: 'Oops... something went wrong with bringing the weather data to you',
  });
  const [isLoading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(false);
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`;
    try {
      if (searchCity) {
        const res = await fetch(apiURL);

        if (res.ok) {
          const data = await res.json();
          setCityWeather([data, ...cityWeather]);
        } else {
          setError({show: true, error: `${searchCity}'s is not a city name`});
        }
      }
    } catch (err) {
      setError({
        show: true,
        error: `Oops... something went wrong with bringing ${searchCity}'s data to you`,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect((searchCity) => {
    fetchWeatherData();
  }, []);

  const onInputChange = (e) => {
    setSearchCity(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchWeatherData();
    e.target.reset();
  };
  const onDeleteHandler = (cityData) => {
    const newCities = cityWeather.filter((city) => city !== cityData);
    setCityWeather([...newCities]);
  };

  return (
    <div className="container">
      <Header />
      <SearchForm
        onSubmit={onSubmitHandler}
        onClick={fetchWeatherData}
        searchCity={searchCity}
        hasError={hasError}
        onInputChange={onInputChange}
      />
      <Loading isLoading={isLoading} searchCity={searchCity} />
      {!hasError &&
        cityWeather.map((weather, index) => {
          return (
            <CityDetails
              key={index}
              weather={weather}
              handleDelete={() => onDeleteHandler(weather)}
            />
          );
        })}
    </div>
  );
}

export default App;
