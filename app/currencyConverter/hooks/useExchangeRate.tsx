'use client'

import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

export const useExchangeRate = (currencyFrom: string, currencyTo:string, amountFrom: string) => {
  const [amountTo, setAmountTo] = useState('0.00');

  const authKey = process.env.X_RAPID_API_KEY;

  const fetchExchangeRate = useCallback(debounce((currencyFrom, currencyTo, amountFrom) => {
    axios.get('https://currency-exchange.p.rapidapi.com/exchange', {
      headers: {
        'X-RapidAPI-Key': '7f84064561msh666eb6ace3981d9p1f93bajsn975a9a63b0e5',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      },
      params: {
        from: currencyFrom,
        to: currencyTo,
        q: amountFrom
      }
    }).then(response => {
      let calculatedAmount = parseFloat(amountFrom) * response.data;
      setAmountTo(calculatedAmount.toString());
    }).catch(error => {
      console.error('Error fetching exchange rate:', error);
    });
  }, 500), []);

  useEffect(() => {
    if (amountFrom && currencyFrom && currencyTo) {
      fetchExchangeRate(currencyFrom, currencyTo, amountFrom);
    }
  }, [currencyFrom, currencyTo, amountFrom, fetchExchangeRate]);

  return [amountTo];
};
