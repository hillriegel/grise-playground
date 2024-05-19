
'use client'

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from 'next/link';


export default function Homebody() {


    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item>
                    <Image src="/images/grise_bw.png" alt="photo of Grise" width="300" height="600" className="image-border" />
                    <div className="left-quote">
                        <h1>I'm a lifelong learner</h1>
                        This project is my playground for expirementing, solving puzzles and challenges, and trying out new techniques.
                    </div>
                </Grid>
                <Grid item>
                    <h1>A Collection of Exercises and Ideas </h1>
                    <p>
                        This is a basic React/Next.js app set up to demonstrate creating app functionality.
                    </p>
                    <p>
                        The repository of this project and all its examples can be retrieved from GitHub here:
                    </p>
                    <br />
                            <div className="link-button">
                                <a href="https://github.com/hillriegel/grise-playground" target="new">github: grise-playground</a>
                            </div>
           
                        <Card className="blog-card">
                            <span className="card-date">May 18, 2024</span><br />
                            <span className="card-title">I've been thinking a lot about this podcast I listened to today:</span><br />
                            <br />
                            <iframe  src="https://open.spotify.com/embed/episode/3118rHFjnVHBi1a5VRjuq1?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </Card>
                        <Card className="blog-card" >
                            <iframe  src="https://open.spotify.com/embed/playlist/0S11n0bev4lQ0LKbcvMYmC?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </Card>
                 
                </Grid>
            </Grid>
        </Box>
    )
}

