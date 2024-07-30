'use client'

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import PatternIcon from '@mui/icons-material/Pattern';
import LinkIcon from '@mui/icons-material/Link';
import { debounce } from 'lodash'; // You might need to install lodash if not already installed

export default function MpasReactRouter() {


    return (
        <main className="flex min-h-screen flex-col">
        <div className="page-title">
            <h1><PatternIcon style={{marginBottom: '4px'}} /> &nbsp; Design Patterns :: Intersection Observer</h1>
        </div>

        <div className="main-content">
            
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                       <h2>Component</h2>
                        <br />
                        <Image src='/images/design-patterns/intersection-observer1.png' width="800" height="500" alt="mpas react router image" />


                        <br />
                        <br />
                        <h2>HTML</h2>
                        <br />
                        <Image src='/images/design-patterns/intersection-observer2.png' width="800" height="500" alt="mpas react router image" />

                        <h2>CSS</h2>
                        <br />
                        <Image src='/images/design-patterns/intersection-observer-css.png' width="800" height="500" alt="mpas react router image" />
                    </Grid>
                </Grid>

               </div>
          </main>
    );
};
