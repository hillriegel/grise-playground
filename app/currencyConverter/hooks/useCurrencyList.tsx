'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';



export const useCurrencyList = () => {

  /* const authKey = process.env.REACT_APP_X_RAPID_API_KEY; */

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://currency-exchange.p.rapidapi.com/listquotes', {
      headers: {
        'X-RapidAPI-Key': '7f84064561msh666eb6ace3981d9p1f93bajsn975a9a63b0e5',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    }).then(response => {
      setData(response.data);
    }).catch(error => {
      console.error('Error fetching currency list:', error);
    });
  }, []); // Include apiKey in the dependency array

  return data;
};
