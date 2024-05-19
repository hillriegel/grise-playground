'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Paper,
  Button,
  TextField,
  List,
  ListItem,
  Card,
} from '@mui/material'
import Grid from '@mui/material/Grid';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Resume = () => {

    return (
      <main className="flex  flex-col">
        <div className="min-h-screen flex-1" style={{padding: '20px', width: '100%'}}>
         <h1><b>Resume</b></h1> <PictureAsPdfIcon />
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

        <Paper style={{padding: '20px', marginTop: '20px'}}>
            <div>
              <h2>Work Experience</h2>
                <Card>
                <b>Sinch</b><br />
                Sr. Frontend Developer<br />
               Sweden · Remote • 11/2020 - 04/2024 Sr. Developer • Full-time
                <br />
                <br />
                <List>
                  <ListItem>Using React.js, Next.js, Typescript, Material UI, and HTML5, I worked closely with designers 
                    doing customer-focused development to produce data visualization elements that made complex data actionable for our customers.
                    I&apos;m recognized for my ability to collaborate with cross-functional teams.
                  </ListItem>
                  <ListItem>
                    Streamlined design and development of applications, enhancing speed and efficiency for managing large data sets, leading to a 50% improvement in performance in 9 months.
                  </ListItem>
                  <ListItem>
                    Worked closely with backend teams to create and sync node-based GraphQL BFFs with databases.
                  </ListItem>
                  <ListItem>Improved user experience by designing data display charts and summaries for complex datasets, resulting in a 10% increase in user engagement.

                  </ListItem>
                  <ListItem>Developed and executed JEST and Playwright testing to enhance testing efficiency, reducing bug resolution time by 25%.</ListItem>
                

            </List>
            </Card>

            </div>
        
  
        </Paper>

        </div>
      </main>
    );
};

export default Resume;
