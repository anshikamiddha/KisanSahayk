import { Instagram } from 'lucide-react';
import React from 'react';

const Weather = () => {
  return (
    <div className='weather'>
      {/* Search Bar */}
      <div className='search-bar'>
        <input type="text" placeholder='Search' className='search-input' />
        {/* You can add a search icon or an image here */}
        <img src="" alt="search icon" className='search-icon'/>
      </div>

      {/* Weather Icon */}
      <img src='' alt="weather icon" className='weather-icon' />

      {/* Temperature */}
      <p className='temperature'>16°C</p>
      
      {/* Location */}
      <p className='location'>London</p>

      {/* Weather Data (Humidity, etc.) */}
      <div className="weather-data">
        <div className="col">
          {/* You can replace this with actual weather data */}
          <img src='' alt='weather detail' className='weather-detail-img'/>
        </div>
        
        {/* Humidity Section */}
        <div className="humidity">
          <p className='humidity-percentage'>91%</p>
          <span>Humidity</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
