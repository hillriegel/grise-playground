'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import SelectMenu from './SelectMenu';

export default function CustomSelect() {

  return (
    <main className="flex min-h-screen flex-col" >
    <div className="page-title">
        <h1>React Components: Custom Select</h1>
    </div>


  <div className="main-content">
      <h1>Create a Custom Select Dropdown Menu</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <div style={{height: '800px', padding: '20px'}}>
            <h2> Custom Select Dropdown</h2>
            <div className="component" style={{height: '400px'}}>
                <SelectMenu />
            </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={5}>
        <br ></br>
        <h2>Coding Challenge</h2>
        <p>This was an interview test question to create a custom select menu dropdown from scratch. I found this challenging
            initially because I have used material-ui for years
            and a proprietary design system. Whenever I needed a select menu I just imported it.
        </p>
        <p>There are many improvements that could be made to this such as truncating menu options that are too long. The time limit
            for this exercise was a little over 2 hours.
        </p>
        <p>This menu uses Fetch to grab a list of movie genres from a public API.</p>
      </Grid>
     </Grid>
    </div>
    </main>
  )
}