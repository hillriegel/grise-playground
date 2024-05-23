
'use client'

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from 'next/link';
import ChairIcon from '@mui/icons-material/Chair';
import HexagonIcon from '@mui/icons-material/Hexagon';

export default function Homebody() {


    return (
        <div className="body-container">
        <Box>
            <Grid container spacing={3}>
                <Grid item  xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={3}>

                    <Image src="/images/grise_profile_pic_sm.png" alt="photo of Grise" width="300" height="600" className="image-border" priority/>
                    <div className="left-quote" style={{paddingRight: '25px'}}>
                        <h1>I'm a lifelong learner</h1>
                        This project is my playground for expirementing, solving puzzles and challenges, and trying out new techniques.
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <h1>A Collection of Exercises and Ideas </h1>
                    <p>
                        This is a React/Next.js app set up to demonstrate creating app functionality. Redux, MongoDB/Atlas, Material-UI, custom components, 
                        coding challenges.
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
            <div style={{margin: '20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <h2><ChairIcon /> &nbsp; Current Component Challenge</h2>
                    <div className="challenge">
                        <h2 className="white">Custom Pagination Component</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <Image src="/images/pagination.jpg" alt="pagination bar" height="100" width="700" className="image-border-thin"></Image>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                This challenge (1.5 hours) is surprisingly complex. Maintaining state requires passing a lot of
                                information around the component.
                                <br /><br />
                                <div className="link-button" style={{border: 'solid 1px #155263'}}>
                                    <Link href="./CustomComponents/paginationForm" >View the progress here</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
            <div style={{margin: '20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <h2><HexagonIcon /> &nbsp; Current Node Fun</h2>
                    <div className="node-challenge">
                        <h2 className="white">Build an Express Backend with MongoDB Integration</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <Image src="/images/express-architecture.png" alt="express architecture" height="100" width="700"></Image>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                Create a MongoDB on Atlas, create an Express server and API that interacts with a simple
                                user account management form in a client app.
                                <br /><br />
                                <div className="link-button" style={{border: 'solid 1px #155263'}}>
                                    <Link href="./NodeFun/expressBackend" >View the progress here</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
        </Box>
        </div>
    )
}

