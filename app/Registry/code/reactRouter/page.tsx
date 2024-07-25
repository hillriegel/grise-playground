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
            <h1><PatternIcon style={{marginBottom: '4px'}} /> &nbsp; Design Patterns :: MPAS Using React Router</h1>
        </div>

        <div className="main-content">
               
                <h2>Using React Router</h2>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                      
                        <p>
                            Using React Router is straightforward.
                        </p>
                            <ul>
                                <li>install react-router-dom</li>
                                <li> import  RouterProvider, createBrowserRouter  from 'react-router-dom';</li>
                            </ul>
                            
                           
    
                        <p>
                            Then set up a router with its paths, including queryParams if needed.
                        </p>
                        <p>
                            Return the RouterProvider as the main component of the App.
                        </p>
                        <br />
                        <Image src='/images/design-patterns/mpas-react-router.png' width="800" height="500" alt="mpas react router image" />


                        <br />
                        <br />
                        <h2>Navigation</h2>
                        <br />
                        <Image src='/images/design-patterns/mpas-router-navigation.png' width="800" height="500" alt="mpas react router image" />

                        <h2>Use Params</h2>
                        <br />
                        <Image src='/images/design-patterns/mpas-router-useParams.png' width="800" height="500" alt="mpas react router image" />
                    </Grid>
                </Grid>

               </div>
          </main>
    );
};
