'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Paper,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
} from '@mui/material'
import Grid from '@mui/material/Grid';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // A small dot icon


const Resume = () => {

    return (
      <main className="flex  flex-col">
        <div className="min-h-screen flex-1" style={{padding: '20px', width: '100%'}}>
          <div style={{display: 'flex', alignContent: 'center'}}>
            <div style={{flexGrow: '3'}}>
            <h1><b>Resume</b></h1>
            </div>
            <div>
            <PictureAsPdfIcon />
            </div>
         </div>
         <br />
         <br />
         <h2>Grise Hillriegel</h2>
         Oakland, CA 94605<br/>
         hillriegel@gmail.com<br />
         <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
          <Paper style={{padding: '20px', marginTop: '20px'}}>
            <div>
              <h2>About Me</h2>
              <p>
            I&apos;m an experienced Frontend Developer with over 15 years of experience using <b>JavaScript</b> frameworks, and 4 years of experience using <b>React.js</b> to develop enterprise web applications.
            </p>
            <p>
              With extensive <b>UI/UX</b> experience and emphasis on building Web applications that are data-intensive and user-friendly, I&apos;m recognized for my ability to collaborate with cross-functional teams.
            </p>
            </div>
        </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
          <Paper style={{padding: '20px', marginTop: '20px', height: '237px'}}>
            <div>
              <h2>Education</h2>
              <h3>Masters - New Media Design</h3>
              Academy of Art University, San Francisco, CA
              <br />
              <h3>Bachelors - Music Theory</h3>
              Oberlin College, Oberlin, OH
            </div>
        </Paper>
          </Grid>
         </Grid>


        <Paper style={{padding: '20px', marginTop: '20px'}}>
            <div style={{width: '80%'}}>
              <h2>Work Experience</h2>
                <div style={{margin: '20px'}}>
                  <b>Sinch</b><br />
                  Sr. Frontend Developer<br />
                  Sweden · Remote • 11/2020 - 04/2024 • Full-time
                  
                  <List style={{marginTop: '20px'}}>
                    <ListItem key="sinch-skill-1">
                    <ListItemIcon style={{marginTop: '-40px'}}>
                       <FiberManualRecordIcon style={{ fontSize: '10px', color: 'gray' }} /> {/* Customize size and color */}
                    </ListItemIcon>
                    <div style={{marginLeft: '-20px'}}>
                   Using React.js, Next.js, Typescript, Material UI, and HTML5, I worked closely with designers 
                      doing customer-focused development to produce data visualization elements that made complex data actionable for our customers.
                      I&apos;m recognized for my ability to collaborate with cross-functional teams.
                   </div>
                    </ListItem>

                    <ListItem>
                    <ListItemIcon style={{marginTop: '-20px'}}>
                       <FiberManualRecordIcon style={{ fontSize: '10px', color: 'gray' }} /> {/* Customize size and color */}
                    </ListItemIcon>
                    <div style={{marginLeft: '-20px'}}>
                      Streamlined design and development of applications, enhancing speed and efficiency for managing large data sets, leading to a 50% improvement in performance in 9 months.
                      </div>
                    </ListItem>
             
                    <ListItem>
                    <ListItemIcon style={{marginTop: '0px'}}>
                       <FiberManualRecordIcon style={{ fontSize: '10px', color: 'gray' }} /> {/* Customize size and color */}
                    </ListItemIcon>
                    <div style={{marginLeft: '-20px'}}>
                      Worked closely with backend teams to create and sync node-based GraphQL BFFs with databases.
                      </div>
                    </ListItem>
                    <ListItem>
                    <ListItemIcon style={{marginTop: '-20px'}}>
                       <FiberManualRecordIcon style={{ fontSize: '10px', color: 'gray' }} /> {/* Customize size and color */}
                    </ListItemIcon>
                    <div style={{marginLeft: '-20px'}}>
                      Improved user experience by designing data display charts and summaries for complex datasets, resulting in a 10% increase in user engagement.
                      </div>
                    </ListItem>

                    <ListItem>
                     <ListItemIcon style={{marginTop: '-20px'}}>
                       <FiberManualRecordIcon style={{ fontSize: '10px', color: 'gray' }} /> {/* Customize size and color */}
                    </ListItemIcon>
                    <div style={{marginLeft: '-20px'}}>
                      Developed and executed JEST and Playwright testing to enhance testing efficiency, reducing bug resolution time by 25%.
                      </div>
                      </ListItem>
                  </List>
                </div>

                <div style={{margin: '20px'}}>
                  <b>SAP</b><br />
                  Sr. Software Engineer<br />
                  San Ramon, CA · Hybrid • 05/2010 - 11/2020 • Full-time
                  <br />
                  <br />
                  <List>
                    <ListItem>Led the full rebranding and UI/UX overhaul of a customer-facing enterprise web application, serving over 10K users, to modernize the user experience and align with new brand guidelines in 6 months.
                    </ListItem>
                    <ListItem>
                    Led the front-end development of a data-heavy web application using JavaScript, ensuring the application was optimized for speed and scalability and met customer's needs.
                    </ListItem>
                    <ListItem>
                    Implemented and maintained robust GraphQL services to optimize data retrieval and management, ensuring efficient communication between the client and servers. Facilitated daily stand-ups, sprint plannings, retrospectives, and demos. 
                    </ListItem>
                    <ListItem>Worked closely with cross-departmental project managers, UX/UI designers, and backend teams to ensure frontend designs were feasible and aligned with backend capabilities. Utilized Jira to track tasks and manage project progress effectively.
                    </ListItem>
                  </List>
                </div>

                <div style={{margin: '20px'}}>
                  <b>Sybase</b><br />
                  Project Lead Developer<br />
                  Dublin, CA · On-site • 07/2003 - 12/2010 • Full-time
                  <br />
                  <br />
                  <List>
                    <ListItem>Combined multiple web applications and backends into one application, improving code maintenance efficiency by 45% and unifying the user authorization schema.
                    </ListItem>
                    <ListItem>
                    Converted legacy web applications to modern frameworks and responsive design resulting in 50% compatibility improvements, approximately 30% improvements in site efficiency.
                    </ListItem>
                    <ListItem>
                    Developed and integrated a JEST testing system and implemented testing for code coverage of 80%.
                    </ListItem>
                  </List>
                </div>

            </div>
        
  
        </Paper>

        </div>
      </main>
    );
};

export default Resume;
