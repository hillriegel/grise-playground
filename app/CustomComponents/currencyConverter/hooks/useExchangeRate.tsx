import { useState, useCallback, useEffect, useMemo } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

export const useExchangeRate = (currencyFrom: string, currencyTo: string, amountFrom: string) => {
  const [amountTo, setAmountTo] = useState('0.00');
  const authKey = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

  const fetchExchangeRate = useCallback((currencyFrom: string, currencyTo: string, amountFrom: string) => {
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
      const calculatedAmount = Math.round((parseFloat(amountFrom) * response.data) * 100) / 100;
      setAmountTo(calculatedAmount.toString());
    }).catch(error => {
      console.error('Error fetching exchange rate:', error);
    });
  }, [authKey]);  // Add any other dependencies here if they are supposed to change over time

  const debouncedFetchExchangeRate = useMemo(() => debounce(fetchExchangeRate, 500), [fetchExchangeRate]);

  useEffect(() => {
    if (amountFrom && currencyFrom && currencyTo) {
      debouncedFetchExchangeRate(currencyFrom, currencyTo, amountFrom);
    }
  }, [currencyFrom, currencyTo, amountFrom, debouncedFetchExchangeRate]);

  return [amountTo];
};
