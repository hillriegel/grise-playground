
'use client'

import React from 'react';
import Image from 'next/image';
import { 
    Grid,
    Box,
    Card,
    Typography,

 } from '@mui/material'

 import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
 import { styled } from '@mui/material/styles';

import ChairIcon from '@mui/icons-material/Chair';
import HexagonIcon from '@mui/icons-material/Hexagon';
import GithubButton from './DesignComponents/GithubButton';
import LinkButton from './DesignComponents/LinkButton';
import HomeIcon from '@mui/icons-material/Home';
import SvgBlob from './svg/SvgBlob';
import SvgOval from './svg/SvgOval';

interface CustomTooltipProps extends TooltipProps {
    className?: string;
}

const CustomTooltip = styled(({ className, ...props }: CustomTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent', // Example: setting transparent background
        border: '0px',                  // Example: removing border
        padding: '0px',                 // Example: removing padding
    }
});
export default function Homebody() {


    return (

        <Box style={{marginTop: '-50px'}}>
        <div className="page-title">
            <h1><HomeIcon style={{marginBottom: '4px'}} /> &nbsp; Playground :: Home</h1>
        </div>
        <br /><br />
            <Grid container spacing={2}>
                <Grid item  xs={12} sm={2}>
                    {/* empty colum */}
                </Grid>
                <Grid item xs={10} sm={7} md={3}>
                    <Card className="blog-card">
                        <Image 
                            src="/images/grise_profile_pic_sm.png" 
                            alt="photo of Grise" 
                            width="300" 
                            height="600" 
                            priority 
                            style={{borderRadius: '4px'}}/>
                    </Card>
                    <div className="left-quote" style={{marginTop: '100px'}}>
                        <h1>I'm a lifelong learner</h1>
                        This project is my playground for expirementing, solving puzzles and challenges, and trying out new techniques.
                  
                        <CustomTooltip
                            title={
                                <Typography className="tooltip-title">
                                    I spent a few years <a href="https://www.amazon.com/Making-Breaking-Second-Updated-Expanded/dp/163159284X" 
                                        target="_blank" rel="noopener noreferrer">making and breaking the grid</a>. 
                                        We learned that the eye is drawn to circle shapes.
                                </Typography>
                        } 
                        placement="top">
                        <svg width="150" height="150" viewBox="0 0 50 50" style={{float: 'right', marginRight: '-30px'}}>
                            <SvgBlob  />
                        </svg>
                    </CustomTooltip> 
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} md={7}>
                    <div style={{marginLeft: '15px'}}>
                    <h1>A Collection of Exercises and Ideas </h1>
                    <p>
                        This Next.js app is my playground for exploring ideas, having fun with UI, demonsrating Redux, MongoDB/Atlas, Material-UI, 
                        and building custom components.
                    </p>
                        <GithubButton link="https://github.com/hillriegel/grise-playground" label="grise-playground" />
           
                        <Card className="blog-card" style={{marginLeft: '0px'}}>
                            <span className="card-date">May 18, 2024</span><br />
                            <span className="card-title">I've been thinking a lot about this podcast I listened to today:</span><br />
                            <br />
                            <iframe  src="https://open.spotify.com/embed/episode/3118rHFjnVHBi1a5VRjuq1?utm_source=generator" 
                                width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy" style={{borderRadius: '4px'}}>
                            </iframe>
                        </Card>
                        </div>
                </Grid>
            </Grid>


            <br />
            <Grid container spacing={3}>
                {/* COMPONENT CHALLENGE */}
                <div style={{marginLeft: '40px', marginRight: '20px', marginTop: '20px', marginBottom: '40px'}}>
                        <h2><ChairIcon /> &nbsp; Current Component Challenge :: June 2, 2024</h2>
                        <div className="challenge-blue" style={{padding: '30px'}}>
                            <h2 className="white">Music Streamer</h2>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={5}>
                                    <Image src="/images/grisecon_streamer.png" alt="Grisecon's Music" height="100" width="500" className="image-border-thin"></Image>
                                </Grid>
                                <Grid item xs={12} sm={6} md={7}>
                                    <div style={{marginLeft: '30px'}}>
                                    The main component of this project is a streaming component that sits in an iframe. The learning step was setting
                                    up a serverless function within the Next app... configuring the environment variables, the email SMTP server, etc.
                                    
                                    <GithubButton link="https://grisecon-mobile-portfolio.vercel.app/" label="grisecon-music-streamer" />
                                    <br />
                                 </div>
                                </Grid>
                            </Grid>
                        </div>
                 </div>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={5} md={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="left-quote" style={{marginTop: '100px'}}>
                        <h2>Chillout!</h2>
                        I find ambient music helps me focus while I'm coding. It's good for destressing, too. Also, I write and produce electronic music.
                        You can hear some of my tracks in this playlist.
                        If you need some music to relax and focus...
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7}>
                    <Card className="blog-card" >
                        <iframe  src="https://open.spotify.com/embed/playlist/0S11n0bev4lQ0LKbcvMYmC?utm_source=generator" 
                            width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                        </Card>
                </Grid>
            </Grid>




            {/* COMPONENT CHALLENGE */}
            <div style={{marginRight: '20px', marginLeft: '20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <h2><ChairIcon /> &nbsp; Component Challenge</h2>
                        <div className="challenge-purple" style={{padding: '30px'}}>
                            <h2 className="white">Pinochle Scorer</h2>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <Image src="/images/pinochle_screen.png" alt="Pinochle Scorer" height="100" width="700" className="image-border-thin"></Image>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div style={{marginLeft: '30px'}}>
                                    It took me about 2.5 hours from start to finish to write this just for fun. I'm working to see how to test and find bugs
                                    by looking at the behavior I would never think of... like hitting a reducer button and not thinking to not let the value
                                    go negative... an obvious guardrail that I just didn't think of, because every time I tested I stopped decrementing when the value 
                                    got to zero.
                                    
                                    <GithubButton link="https://pinochle-scorer.vercel.app/" label="pinochle-scorer" />
                                    <br />
                                    Often my dining room table looks like a pinochle parlor. My mother and sister play a few quick games almost every day. They use a big stack of scratch paper and keep score by hand. Watching them scribble on the paper and keep track of the scores for different melds and then counting up the points from the tricks made me think there could be an easier way to do it with an app.
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '30px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <h2><HexagonIcon /> &nbsp; Current Node Fun</h2>
                    <div className="node-challenge" style={{paddingLeft: '30px'}}>
                        <h2 className="white">Build an Express Backend with MongoDB Integration</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <Image src="/images/express-architecture.png" alt="express architecture" height="100" width="700"></Image>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <div style={{marginLeft: '30px'}}>
                                    Create a MongoDB on Atlas, create an Express server and API that interacts with a simple
                                    user account management form in a client app.
                                    <LinkButton link="./NodeFun/expressBackend" label="View the progress here" />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
        </Box>
       
    )
}

