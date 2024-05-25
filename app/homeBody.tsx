
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
        <div className="body-container" style={{marginLeft: '25px'}}>
        <Box>
            <Grid container spacing={3}>
                <Grid item  xs={12} sm={2}>
                    {/* empty colum */}
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Image src="/images/grise_profile_pic_sm.png" alt="photo of Grise" width="300" height="600" className="image-border" priority/>
                    <div className="left-quote" style={{paddingRight: '30px', marginTop: '100px'}}>
                        <h1>I'm a lifelong learner</h1>
                        This project is my playground for expirementing, solving puzzles and challenges, and trying out new techniques.
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div style={{marginLeft: '15px'}}>
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
           
                        <Card className="blog-card" style={{marginLeft: '0px'}}>
                            <span className="card-date">May 18, 2024</span><br />
                            <span className="card-title">I've been thinking a lot about this podcast I listened to today:</span><br />
                            <br />
                            <iframe  src="https://open.spotify.com/embed/episode/3118rHFjnVHBi1a5VRjuq1?utm_source=generator" 
                                width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                            </iframe>
                        </Card>
                        </div>
                </Grid>
            </Grid>


            <br />
            <Grid container spacing={3}>
                {/* COMPONENT CHALLENGE */}
                <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '40px'}}>
                        <h2><ChairIcon /> &nbsp; Current Component Challenge :: May 29, 2024</h2>
                        <div className="challenge-purple" style={{padding: '30px'}}>
                            <h2 className="white">Pinochle Scorer</h2>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <Image src="/images/pinochle_screen.png" alt="Pinochle Scorer" height="100" width="700" className="image-border-thin"></Image>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div style={{marginLeft: '30px'}}>
                                    It took me about 2.5 hours from start to finish to write this just for fun.
                                    <br /><br />
                                    <div className="link-button" style={{border: 'solid 1px #155263'}}>
                                        <Link href="https://pinochle-scorer.vercel.app/" target="new">View the progress here</Link>
                                        
                                    </div>
                                    <br />
                                    Often my dining room table looks like a pinochle parlor. My mother and sister play a few quick games almost every day. They use a big stack of scratch paper and keep score by hand. Watching them scribble on the paper and keep track of the scores for different melds and then counting up the points from the tricks made me think there could be an easier way to do it with an app.
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                 </div>
            </Grid>

            <Grid container spacing={3} >

                <Grid item xs={12} sm={5} style={{textAlign: 'right'}}>
                <div className="left-quote" style={{marginLeft: '200px', paddingRight: '35px', marginTop: '100px'}}>
                    <h2>Chillout!</h2>
                    I find ambient music helps me focus while I'm coding. It's good for destressing, too. Also, I write and produce electronic music.
                    You can hear some of my tracks in this playlist.
                    If you need some music to relax and focus...
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>

                        <Card className="blog-card" >
                            <iframe  src="https://open.spotify.com/embed/playlist/0S11n0bev4lQ0LKbcvMYmC?utm_source=generator" width="570px" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </Card>
                </Grid>
                 
            </Grid>


            {/* COMPONENT CHALLENGE */}
            <div style={{marginRight: '20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <h2><ChairIcon /> &nbsp; Component Challenge</h2>
                        <div className="challenge" style={{paddingLeft: '30px'}}>
                            <h2 className="white">Custom Pagination Component</h2>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <Image src="/images/pagination.jpg" alt="pagination bar" height="100" width="700" className="image-border-thin"></Image>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div style={{marginLeft: '30px'}}>
                                    This challenge (1.5 hours) is surprisingly complex. Maintaining state requires passing a lot of
                                    information around the component.
                                    <br /><br />
                                    <div className="link-button" style={{border: 'solid 1px #155263'}}>
                                        <Link href="./CustomComponents/paginationForm" >View the progress here</Link>
                                    </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div style={{marginRight: '20px', marginTop: '30px'}}>
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
                                <br /><br />
                                <div className="link-button" style={{border: 'solid 1px #155263'}}>
                                    <Link href="./NodeFun/expressBackend" >View the progress here</Link>
                                </div>
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

