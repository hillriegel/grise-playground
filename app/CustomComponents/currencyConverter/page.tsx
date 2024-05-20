'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useCurrencyList, useExchangeRate} from './hooks';

const now = new Date();

const customHook1Code = `import { useState, useCallback, useEffect } from 'react';
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
`;

const customHook2Code = `import { useState, useEffect } from 'react';
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
`;
export default function CurrencyConverter() {
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [amountFrom, setAmountFrom] = useState('0.00');
  const [currencyTo, setCurrencyTo] = useState('USD');

  const currencies = useCurrencyList();

  const [amountTo] = useExchangeRate(currencyFrom, currencyTo, amountFrom);

  // Handle amount change
  const handleAmountFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountFrom(event.target.value);
  };

  // Handle currency change (from)
  const handleChangeFrom = (event: SelectChangeEvent) => {
    setCurrencyFrom(event.target.value as string);
  };

  // Handle currency change (to)
  const handleChangeTo = (event: SelectChangeEvent) => {
    setCurrencyTo(event.target.value as string);
  };

  return (
    <main className="flex min-h-screen flex-col">
        <div className="page-title">
        <h1>React Components: Currency Exchange</h1>
      </div>

      <div className="main-content">
        
        <Grid container spacing={2}>
          <Grid item xs={8} sm={7}>
            <div style={{width: '700px'}}>
            <p>This is a simple currency converter that makes use of a free API to retrieve the list of currencies to populate
                the dropdown menu.
                </p>
                <p>
                  Half a second after the amount is changed the debounced call is made to a second API to retrieve the exchange value.
                </p>
          <br />
          </div>
        </Grid>
        </Grid>
        
        <Grid container spacing={0}>
          <Grid item xs={8} sm={6} className="component">
            <div className="items-center justify-between" style={{margin: '10px', width: '100%', textAlign: 'center', color: '#ffffff'}}>
              {now.toDateString()}
            </div>
            <section className="currencyContainer flexbox-row">
              
              <br />
                <div className="exchangeInput">
                  <Card>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <TextField id="outlined-basic" 
                          label="Amount" variant="outlined" 
                          value={amountFrom} onChange={handleAmountFromChange} 
                          style={{width: 100}}
                          />
                        </Grid>
                        <Grid item>
                          <Box sx={{ minWidth: 50 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="currencyFrom"
                                value={currencyFrom}
                                label="Currency"
                                onChange={handleChangeFrom}
                              >
                                {currencies.map((curr, index) => (
                                  <MenuItem key={'fr.'+index} value={curr}>{curr}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </div>
                <div style={{fontSize: '3em', color: '#ffffff'}}>=</div>
                <div className="exchangeInput">
                  <Card>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <TextField id="outlined-basic" label="Amount" variant="outlined" value={amountTo}  style={{width: 100}}/>
                        </Grid>
                        <Grid item>
                          <Box sx={{ minWidth: 50 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="currencyTo"
                                value={currencyTo}
                                label="Currency"
                                onChange={handleChangeTo}
                              >
                                {currencies.map((curr, index) => (
                                  <MenuItem key={'to.'+index} value={curr}>{curr}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  
                </div>
            </section>
          </Grid>
          <Grid item xs={4} sm={5} style={{marginLeft: '20px'}}>
          <h2>Coding Challenge</h2>
          <p>
            Creating a simple app that makes an API call (in this case, 2) and includes debounce so that the call isn't made too many times quickly is a pretty standard
            coding challenge for a lower-level frontend developer position.
          </p>
          <br />
          <h2>Setup</h2>
          <p>
            There are two functions, fetch API calls. The first is to get the list of currency abbreviations, and the second is to get the converted amount/exchange rate
            when either an amount changes or the currency changes. 
          </p>
          <p>
            Both of these can be set up as custom hooks so that they are separate from the view and also for testing. 
          </p>
        </Grid>
        </Grid>
   
        <br />
        <h2>useExchangeRate Custom Hook</h2>
        <pre>
          <div className="code-content">
           <code>


          {customHook1Code}
          </code>
          </div>
       </pre>

       <br />
        <h2>useCurrencyList Custom Hook</h2>
        <pre>
          <div className="code-content">
           <code>


          {customHook2Code}
          </code>
          </div>
       </pre>



       </div>
    </main>

  );
}
