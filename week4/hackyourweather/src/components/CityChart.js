import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Error from './ErrorMessage';
import Loading from './LoadingMessage';
import './css/Chart.css';

function CityChart({kelvinToCelsius}) {
  const {cityId} = useParams();
  const history = useHistory();
  const [cityChartData, setCityChartData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({
    show: false,
  });

  useEffect(() => {
    const fetchCityData = async () => {
      setLoading(true);
      setError(false);

      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;

      try {
        if (cityId) {
          const res = await fetch(apiURL);
          console.log(res);
          const data = await res.json();
          console.log(data);
          if (res.ok) {
            let newCityChartData = {
              cityName: data.city.name,
              foreCastList: data.list.map((item) => ({
                date: item.dt_txt,
                temp: kelvinToCelsius(item.main.temp),
              })),
            };
            setCityChartData(newCityChartData);
          } else {
            setError({
              show: true,
              error: `City Data is not found... sorry`,
            });
          }
        }
      } catch (err) {
        setError({
          show: true,
          error: `Oops... There is Error while bringing the data.`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCityData();
  }, [cityId, hasError, kelvinToCelsius]);

  function handleHeaderClick() {
    history.push('/');
  }

  return (
    <div className="chart_container">
      <div className="header">
        <h1 onClick={handleHeaderClick}>5 day forecast</h1>
        <Loading isLoading={isLoading} />
        <Error hasError={hasError} />
      </div>
      <div className="city_name_chart">
        <h3>{cityChartData.cityName}</h3>
      </div>
      {cityChartData && (
        <div className="chart">
          <ResponsiveContainer>
            <AreaChart
              width={500}
              height={400}
              data={cityChartData.foreCastList}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="temp"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
      <Link to="/">
        {<button className="go_back_button">&larr; Go back</button>}
      </Link>
    </div>
  );
}

export default CityChart;
// {
//   /* {cityChartData.map((cityData) => {
//         return (
//           <div>
//             <p>{cityData[0].city.name}</p>
//             <h2>{cityData[0].list.main.temp}</h2>
//           </div>
//         ); */
// }
