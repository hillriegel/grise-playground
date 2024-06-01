'use client'

import { useState } from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Button from '@mui/material/Button';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import DrawerList from './DrawerList';
import MenuIcon from '@mui/icons-material/Menu';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
  };
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header" style={{width: '100%'}}>
          <Grid container spacing-={2}>
            <Grid item style={{width: '95px'}}>
              <Button sx={{ '& svg':  { width: '80px' } }} className="my-menu-button" onClick={toggleDrawer(true)}>
                <MenuIcon style={{height: '30px'}}/>
              </Button> 
            </Grid>
            <Grid item sm={2}>
              <div style={{marginTop: '5px'}}>:playground:</div>
            </Grid>
          </Grid>
          </div>
        <div>
        
        <Drawer  open={open} onClose={toggleDrawer(false)}>
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
        </div>
        <div className="outer">
          <div className="main-container">
            <div className="content">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
