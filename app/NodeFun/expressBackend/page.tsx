'use client'

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

export default function CssDemo() {
    type FlexDirection = 'row' | 'column';
    type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

    const [alignment, setAlignment] = useState<AlignItems>('flex-start');
    const [direction, setDirection] = useState<FlexDirection>('row');

    return (
        <main className="flex min-h-screen flex-col" >
            <div style={{border: 'solid 1px', 
            padding: '20px', 
            marginLeft: '-40px', 
            width: '810px',
            backgroundColor: '#155263'}}>
                <h1>Node Fun :: Express Background with MongoDB in the Cloud</h1></div>


          <div className="main-content">
               
                <h2>Creating a Server (Express)</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <p>Developing and understanding NoSQL database techniques, setting up a server and connecting it 
                            to a MongoDB Atlas instance is the exercise.
                        </p>
                        <p>
                            <h3>Creating the server in Express is straightforward:</h3>
                            <br />
                            checkout the repository here:
                            <div className="link-button">
                                <a href="https://github.com/hillriegel/grise_express_backend" target="new">github: grise_express_backend</a>
                            </div>
                            <br />
                        </p>
                        <Image alt="server code" src="/images/express-server1.jpg" width="800" height="630" />
                    </Grid>
                </Grid>

                <br />

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <h3>Schema (Model)</h3>
                        <p>Each route needs a schema. This example is creating a user account database that will
                            keep track of users. Because each account includes a password, passwords are encrypted
                            using bcrypt.
                        </p>
                        <br />
                        <Image alt="server code" src="/images/express-schema.jpg" width="800" height="630" />
                    </Grid>
                </Grid>

                <br />

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <h3>Route</h3>
                        <p>With Express.js, a route is a section of Express code that associates an HTTP method (GET, POST, PUT, DELETE, etc.), 
                            a URL path, and a function that will be executed when that path and method are matched to an incoming HTTP request.
                        </p>
                        <p>
                            The route is defined by this part of the code:


                                <pre><code>
                                    .post('/', async (req, res) => {
                                    // Function logic here
                                    });
                                    </code>
                                </pre>
                        

                        </p>
                        <br />
                        <Image alt="server code" src="/images/express-route.jpg" width="800" height="630" />
                        
                        <p>
                            <b>HTTP Method: POST</b> - This defines the type of request that is expected. 
                            The POST method is often used for creating new resources.
                        </p>

                        <p>
                            <b>Path:</b> '/' - This specifies the URL path at which the route will be available. 
                            In this case, it is the root of the route, but when used with a router that is 
                            mounted at a specific path, this would be relative to the mount point. 
                            This route is meant to be accessed at /users.
                        </p>
                        <p>
                            <b>Handler Function:</b> This is the async function 
                                <pre><code>
                                    <b>async (req, res) => { } </b>
                                </code></pre>
                                It takes the request object req and the response object res as parameters. 
                                The function handles the incoming data, interacts with the MongoDB/Atlas database 
                                to create a new user, and sends a response back to the client.
                        </p>
                        <p>
                                Inside the handler function, you create a new user by extracting data from req.body, 
                                saving it to the database using newUser.save(), 
                                and then sending back a successful response including some 
                                of the user details if the database operation is successful. 
                                If there is an error (e.g., if required fields are missing or there's a 
                                database connection issue), an error response is sent back to the client.
                        </p>
                        <p>
                                <b>Response:</b> Depending on the execution of the handler function, 
                                this route sends a HTTP status 201 with the new user data on success, 
                                or a HTTP status 400 with an error message on failure.
                       </p>
                    </Grid>
                </Grid>

               <br /><br />
                <h2>Creating the MongoDB in Atlas</h2>

               <p>MongoDB can be hosted on your own server. I chose to create a db using Atlas, Mongo's cloud platform</p>
               
               <br />
               <Image src="/images/atlas-db.png" alt="atlas db" width="800" height="600" />
              </div>
          </main>
    );
};
