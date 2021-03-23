import React, {useState} from 'react';
import Header from './components/Header';
import SearchForm from './components/Search_Form';
import CityDetails from './components/City_Display_Block';
import Loading from './components/Loading_Message';

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
          setCityWeather([data]);
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

  const onInputChange = (e) => {
    setSearchCity(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchWeatherData();
    e.target.reset();
  };

  return (
    <div className="container">
      <Header />
      <SearchForm
        onSubmit={onSubmitHandler}
        onClick={() => fetchWeatherData()}
        searchCity={searchCity}
        hasError={hasError}
        onInputChange={onInputChange}
      />
      <Loading isLoading={isLoading} searchCity={searchCity} />

      <CityDetails cityWeather={cityWeather} />
    </div>
  );
}

export default App;
