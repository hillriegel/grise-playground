'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import Grid from '@mui/material/Grid';

import ChairIcon from '@mui/icons-material/Chair';
//import FetchSpotify from './fetchSpotify';

const Pagination = () => {
  
  return (
    <main className="flex min-h-screen flex-col" >
    <div className="page-title">
        <h1><ChairIcon style={{marginBottom: '4px'}} />  &nbsp; React Components :: Music Streamer</h1>
    </div>


  <div className="main-content">
      <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
              <div className="component">
                
                  <iframe
                    src="https://grisecon-mobile-portfolio.vercel.app/" 
                    width="100%"
                    height="800px"
                    style={{backgroundColor: '#ffffff', borderRadius: '8px'}}
                    />
              </div>
          </Grid>

          <Grid item xs={12} sm={5} >
          <div style={{padding: '24px', marginRight: '20px'}}>
            <h2>Music Streamer (Portfolio)</h2>
            <p>
              I set out to build a simple app that would allow me to display album covers and load a spotify music streamer for each album.
            
            </p>
            </div>
          </Grid>
        </Grid>

    </div>
    </main>
  );
}

export default Pagination; 
