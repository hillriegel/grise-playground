import { useState, useEffect } from 'react';

export default function GetForecast({ lat = '37.785726781810524', long = '-122.17368276191226', setBackground }) {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '0ca8b9a885bdc5e93529466aa60a0e0f';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`;

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                setBackground(data.weather[0].main.toLowerCase());
                setForecast(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }; 
        fetchForecast();
    }, [lat, long]);  // Dependencies array

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1 style={{color: "#ffffff"}}>Weather Forecast for {forecast.name}</h1>
            <h2 style={{color: "#ffff00"}}>{forecast.weather[0].main}</h2>
            <div style={{color: "#dddddd"}}>
                <b>Temp:</b> {Math.round(forecast.main.temp)}<br />
                <b>Feels like:</b> {Math.round(forecast.main.feels_like)}<br />
                <br />
                <b>Min:</b> {Math.round(forecast.main.temp_min)}<br />
                <b>Max:</b> {Math.round(forecast.main.temp_max)}<br />
                <br></br>
                <b>Pressure:</b> {forecast.main.pressure}<br />
                Humidity: {forecast.main.humidity}<br />
            </div>
        </div>
    );
}
