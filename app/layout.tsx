'use client'

import { useState } from 'react';
import { Inter } from "next/font/google";

import Button from '@mui/material/Button';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import DrawerList from './DrawerList';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from './DesignComponents/ThemeSwitcher';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  

  return (
    <html lang="en">
      <body>
        <div tabIndex={0} className="header" style={{width: '100%', display: 'flex', alignItems: 'center'}} >
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item style={{width: '95px'}}>
              <Button tabIndex={1} sx={{ '& svg':  { width: '80px' } }} className="my-menu-button" onClick={toggleDrawer(true)}>
                <MenuIcon  style={{height: '30px'}} className="neutral" />
              </Button> 
            </Grid>
            <Grid item xs style={{ marginLeft: '10px', fontSize: '1.5rem' }} className="neutral">
              <div style={{marginLeft: '10px', fontSize: '1.5rem'}} className="neutral">:: playground ::</div>
            </Grid>
            <Grid item sm={3} style={{textAlign: 'right', marginRight: '40px'}} >
              <ThemeSwitcher />
            </Grid>
          </Grid>
          </div>



    
        <div>
        
        <Drawer open={open} onClose={toggleDrawer(false)} >
          <DrawerList toggleDrawer={toggleDrawer}  />
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
