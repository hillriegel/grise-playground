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
                  <div style={{border: 'solid 1px', 
            padding: '20px', 
            marginLeft: '-40px', 
            width: '810px',
            backgroundColor: '#155263'}}>
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
        
        <Grid container spacing={2}>
          <Grid item xs={8} sm={7}>

          <section className="currencyContainer features" style={{display: 'flex', alignItems: 'space-between', marginLeft: '0px', width: '700px'}}>
            <div className="items-center justify-between" style={{marginTop: '10px', width: '100%', textAlign: 'center', color: '#ffffff'}}>
              {now.toDateString()}
            </div>
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
              <div style={{fontSize: '2em'}}>=</div>
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
              <Grid xs={6} sm={5}>
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
            </div>
        
    </main>

  );
}
