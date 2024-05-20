'use client'

import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

export const useExchangeRate = (currencyFrom: string, currencyTo:string, amountFrom: string) => {
  const [amountTo, setAmountTo] = useState('0.00');

  const authKey = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

  const fetchExchangeRate = useCallback(debounce((currencyFrom, currencyTo, amountFrom) => {
    axios.get('https://currency-exchange.p.rapidapi.com/exchange', {
      headers: {
        'X-RapidAPI-Key': authKey,
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      },
      params: {
        from: currencyFrom,
        to: currencyTo,
        q: amountFrom
      }
    }).then(response => {
      let calculatedAmount = Math.round((parseFloat(amountFrom) * response.data) * 100) / 100;
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
