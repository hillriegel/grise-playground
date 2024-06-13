'use client'

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import GithubButton from '../DesignComponents/GithubButton';
import PatternIcon from '@mui/icons-material/Pattern';

export default function CssDemo() {
    type FlexDirection = 'row' | 'column';
    type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

    const [alignment, setAlignment] = useState<AlignItems>('flex-start');
    const [direction, setDirection] = useState<FlexDirection>('row');

    return (
        <main className="flex min-h-screen flex-col">
        <div className="page-title">
            <h1><PatternIcon style={{marginBottom: '4px'}} /> &nbsp; Design Patterns :: Registry</h1>
        </div>

      <div className="main-content">
               
                <h2>Design Patterns</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7}>
                      
                        <p>The idea here is to use all the different projects and apps as references
                            for design patterns. There are so many useful patterns in these projects
                            but it could be difficult to remember which projects have certain patterns. By
                            labeling the projects and apps with tags that identify the subjects of their
                            design patterns, you can search for a tag, identify the projects that
                            make use of those patterns, and then locate the pattern.
                        </p>
                        <p>This should also have the ability to add new projects, add and edit tags.</p>
                        <p>The challenge here would be to find a way to attach tags to specific blocks of code 
                            that could then be pulled up.
                        </p>

                        <br />
                        <p>React / Tanstack:<br />
                        "Tanstack Query" (formerly React Query)... 
                        Tanstack handles http requests and allows caching. Tanstack fundamentally handles state logic and pending/errors.
                        </p>
                        <p>
                            Tags: react, tanstack, QueryClientProvider, 
                            http requests, fetch, caching, react-router-dom, react-router, staleTime, gcTime
                        </p>
                    </Grid>
                </Grid>

               </div>
          </main>
    );
};
