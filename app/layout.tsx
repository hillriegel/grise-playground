'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeIcon from '@mui/icons-material/Home';
import ViewStream from '@mui/icons-material/ViewStream';
import Link from 'next/link';
import PagesIcon from '@mui/icons-material/Pages';
import Footer from './footer';
import CodeIcon from '@mui/icons-material/Code';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


const [open, setOpen] = React.useState(false);

const toggleDrawer = (newOpen: boolean) => () => {
  setOpen(newOpen);
};


const handleClick = () => {
  setOpen(!open);
};
const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      

    <List>
      <ListItem key={"home"} disablePadding>
          <Link href="/">
            <ListItemButton className="my-listitem-button">
              <ListItemIcon>
                <HomeIcon style={{width: '20px'}}/>
              </ListItemIcon>
              <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1em', fontFamily: 'Freeman', color: '#888888' } }} primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>
    </List>



    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: '1em', fontFamily: 'Freeman', color: '#888888'}} >
          React Components
        </ListSubheader>
      }
    >
        <ListItem key={"currencyEx"} disablePadding>
          <Link href="/currencyConverter">
        <ListItemButton className="my-listitem-button">
          <ListItemIcon>
            <CurrencyExchangeIcon  style={{width: '20px'}}/>
          </ListItemIcon>
          <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Currency Exchange" />
        </ListItemButton>
        </Link>
      </ListItem>

      <ListItem key={"sampleForm"} disablePadding>
          <Link href="/sampleForm">
        <ListItemButton className="my-listitem-button">
          <ListItemIcon >
            <ViewStream  style={{width: '20px'}}/>
          </ListItemIcon>
          <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Sample Form" />
        </ListItemButton>
        </Link>
      </ListItem>
      
      <ListItem key={"pagination"} disablePadding>
          <Link href="/paginationForm">
        <ListItemButton className="my-listitem-button">
          <ListItemIcon>
            <PagesIcon  style={{width: '20px'}}/>
          </ListItemIcon>
          <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Pagination" />
        </ListItemButton>
        </Link>
      </ListItem>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: '1em', fontFamily: 'Freeman', color: '#888888'}} >
          CSS Exercises
        </ListSubheader>
      }
    >
      <ListItem key={"cssDemo"} disablePadding>
          <Link href="/cssDemo">
            <ListItemButton className="my-listitem-button">
              <ListItemIcon>
                <CodeIcon  style={{width: '20px'}}/>
              </ListItemIcon>
              <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Flex Box Styling" />
            </ListItemButton>
        </Link>
      </ListItem>
              
    </List>
    <Divider />
    <List>
     
        <ListItem key={'Resume'} disablePadding>
        <Link href="/resume">
          <ListItemButton className="my-listitem-button">
            
              <ListItemIcon sx={{ '& svg':  { width: '20px' } }} >
              <SummarizeIcon  style={{width: '20px', color: '#4c6ddb'}}/>
              </ListItemIcon>
              <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1em', fontFamily: 'Freeman', color: '#444444' } }}  primary={'Resume'} />
            </ListItemButton>
            </Link>
        </ListItem>
    </List>
  </Box>
);


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
        {DrawerList}
      </Drawer>
      </div>
      <div className="outer">
      <div className="container">
        <div className="content">
          {children}
        </div>
        </div>
      
      </div>
      </body>
    </html>
  );
}
