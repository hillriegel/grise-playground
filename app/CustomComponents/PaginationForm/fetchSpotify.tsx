'use client'

import React, { useState, useEffect } from 'react';

const clientId = '50c77600e4654f609b16f21933b7e5c3'; // Replace with your client ID

const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_API_SECRET;

const FetchSpotify = () => {
  const [token, setToken] = useState('');

  // Function to request the token
  const fetchToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });
    const data = await response.json();
    setToken(data.access_token);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  // Function to fetch data from Spotify using the token
  const fetchData = async () => {
    if (!token) return;

    const response = await fetch('https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb/related-artists', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);
    // Handle data as needed
  };

  return (
    <div style={{marginTop: '20px'}}>
      <button onClick={fetchData}>Load Artist Data</button>
    </div>
  );
};

export default FetchSpotify;
