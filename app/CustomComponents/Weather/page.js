"use client"

import GetForecast from './components/GetForecast.jsx';
import GetAirQuality from './components/GetAirQuality.jsx';
import SelectCity from './components/SelectCity.jsx';
import { useState, useEffect } from 'react';
import ChairIcon from '@mui/icons-material/Chair';

import './App.css';

export default function Weather() {

  const [coords, setCoords] = useState({lat: 37.7749, lon: -122.4194 })

  useEffect(() => {
    console.log('coords = ', coords);
  },[coords])

  const [background, setBackground] = useState('clear');

  const className = "App " + background;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="page-title">
      <h1><ChairIcon style={{marginBottom: '4px'}} />  &nbsp; React Components :: Weather</h1>
      </div>

      <br />
      <div className={className} >
        <div className="main-content">
          <SelectCity setCoords={setCoords} />
          <GetForecast lat={coords.lat} long={coords.lon} setBackground={setBackground}/>
          <GetAirQuality lat={coords.lat} long={coords.lon} />
        </div>
      </div>
    </main>
  );
}
