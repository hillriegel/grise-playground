'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Image from 'next/image';
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
              <div className="component" style={{marginTop: '20px'}}>
                
                  <iframe
                    src="https://grisecon-mobile-portfolio.vercel.app/" 
                    width="100%"
                    height="800px"
                    style={{
                      backgroundColor: '#ffffff', 
                      borderRadius: '8px',
                      boxShadow: '1px 2px 3px 3px rgba(0, 0, 0, 0.3)'}}
                    />
              </div>
          </Grid>

          <Grid item xs={12} sm={5} >
          <div style={{padding: '24px', marginRight: '20px'}}>
            <h2>Music Streamer (Portfolio)</h2>
            <p>
              I set out to build a simple app that would allow me to display album covers and load a spotify music streamer for each album.
            
            </p>
            <br /><br />
            <h2>I spend a lot of time making music</h2>
            <p>
              And I also spend a lot of time making visual art. For my album covers, I often colloborate or commission original art, such as the cover for 
              my latest album, "Griseconica," which was painted by @michaelkoehler. 
            </p>
            <br />
            <Image
              src='/Bliss-in-Static2.jpg'
              width={400}
              height={400}
              alt="Griseconica Cover art"
              />
            <p>The art is an integral part of capturing the essence of the music. It visually helps me locate the end goal as I'm creating the music, especially for the longer,
              more complicated pieces where I can get lost.
            </p>
            <p>The visual elements of music streamers such as Spotify and Apple Music are still much less satisfying than looking at a 12.375" album cover. And I want to give 
              presence to the impact of the art I use for my albums, so I created a website where the art was more prominent.
              </p>
            </div>
          </Grid>
        </Grid>

    </div>
    </main>
  );
}

export default Pagination; 
