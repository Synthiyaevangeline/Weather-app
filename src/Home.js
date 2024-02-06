import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

const API_key = 'd2df6e61ff42e5263e5af5408e5ac7c4';
const backgroundImageMap = {
  // Clear: 'https://images.pexels.com/photos/6331043/pexels-photo-6331043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // Clouds: 'https://source.unsplash.com/1600x900/?cloudy',
  // Rain: 'https://source.unsplash.com/1600x900/?rainy',
  // Thunderstorm: 'https://source.unsplash.com/1600x900/?thunderstorm',
};

const App = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data && data.weather[0].main in backgroundImageMap) {
      const fetchBackgroundImage = async () => {
        try {
          const response = await Axios.get(backgroundImageMap[data.weather[0].main]);
          document.body.style.backgroundImage = `url(${response.request.responseURL})`;
        } catch (err) {
          console.error('Failed to fetch background image:', err);
        }
      };
      fetchBackgroundImage();
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
      setData(response.data);
    } catch (err) {
      alert('Enter the correct cityName');
    }
  };
  

  return (
    <div className='App'>
      <h1 className='Title'>Weather App</h1>
      <div className='input-container'>
        <input
          type="text"
          className='input'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter the City Name"
        />
        <button className='button' onClick={fetchData}>
          Fetch
        </button>
      </div>
      {error && alert('Enter the correct cityName')}
      {data && (
        <div className='container'>
          <h2>{data.name}</h2>
          <p className='weather-emoji'>{getWeatherEmoji(data.weather[0].main)}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
          <p className='temperature-emoji'>🌡️ Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
};

const getWeatherEmoji = (weather) => {
  switch (weather) {
    case 'Clear':
      return '☀️';
    case 'Clouds':
      return '☁️';
    case 'Rain':
      return '🌧️';
    case 'Thunderstorm':
      return '⛈️';
    case 'Snow':
      return '❄️';
    case 'Mist':
      return '🌫️';
    case 'Fog':
      return '🌁';
    case 'Haze':
      return '🌫️';
    case 'Dust':
      return '🌪️';
    case 'Smoke':
      return '🌫️';
    default:
      return '';
  }
};


export default App;
