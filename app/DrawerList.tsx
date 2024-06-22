import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import CodeIcon from '@mui/icons-material/Code';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListSubheader from '@mui/material/ListSubheader';
import StyleIcon from '@mui/icons-material/Style';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ChairIcon from '@mui/icons-material/Chair';
import HexagonIcon from '@mui/icons-material/Hexagon';
import CollectionsIcon from '@mui/icons-material/Collections';
import PatternIcon from '@mui/icons-material/Pattern';

interface DrawerListProps {
    toggleDrawer: (newOpen: boolean) => () => void;
  }

  const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {
    return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} className="drawer-menu">
        
  

      <List>
        <ListItem key={"home"} disablePadding style={{marginLeft: '-20px'}}>
            <Link href="/">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <HomeIcon className="drawer-menu-icon de-emphasis"/>
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1.1em', fontFamily: 'Freeman' } }} className="drawer-menu-subheader-text de-emphasis" primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
      </List>
  
      <List>
        <ListItem key={"portfolio"} disablePadding style={{marginLeft: '-20px'}}>
            <Link href="/portfolio">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <CollectionsIcon className="drawer-menu-icon emphasis"/>
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1em', fontFamily: 'Freeman' } }} className="drawer-menu-subheader-text emphasis" primary="Portfolio" />
              </ListItemButton>
            </Link>
          </ListItem>
      </List>
  
      <List>
        <ListItem key={"portfolio"} disablePadding style={{marginLeft: '-20px'}}>
            <Link href="/Registry">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <PatternIcon className="drawer-menu-icon emphasis"/>
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1em', fontFamily: 'Freeman' } }} className="drawer-menu-subheader-text emphasis" primary="Design Patterns" />
              </ListItemButton>
            </Link>
          </ListItem>
      </List>
  
  
      <List 
        sx={{ width: '100%', maxWidth: 360 }}
        className="drawer-menu-list"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className="drawer-menu-subheader" >
             <ChairIcon  className="drawer-menu-icon"/> &nbsp; React Components
          </ListSubheader>
        }
      >

      <ListItem key={"map-my-life"} disablePadding>
            <Link href="/CustomComponents/GriseconStreamer">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                    <DataObjectIcon className="drawer-menu-icon neutral" />
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big'} }} className="drawer-menu-item-text" primary="Music Streamer" />
              </ListItemButton>
          </Link>
        </ListItem>

        
        <ListItem key={"map-my-life"} disablePadding>
            <Link href="/CustomComponents/MapMyLife">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                    <DataObjectIcon className="drawer-menu-icon neutral" />
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big'} }} className="drawer-menu-item-text" primary="Map My Life" />
              </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={"currencyEx"} disablePadding>
            <Link href="/CustomComponents/CurrencyConverter">
            <ListItemButton className="drawer-menu-button">
              <ListItemIcon>
                  <DataObjectIcon className="drawer-menu-icon neutral" />
              </ListItemIcon>
              <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big' } }} className="drawer-menu-item-text" primary="Currency Exchange" />
          </ListItemButton>
          </Link>
        </ListItem>
  
        <ListItem key={"sampleForm"} disablePadding>
            <Link href="/CustomComponents/PinochleScorer">
            <ListItemButton className="drawer-menu-button">
              <ListItemIcon >
              <DataObjectIcon className="drawer-menu-icon neutral" />
              </ListItemIcon>
              <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big' } }} className="drawer-menu-item-text" primary="Pinochle Scorer" />
          </ListItemButton>
          </Link>
        </ListItem>
        
        <ListItem key={"pagination"} disablePadding>
            <Link href="/CustomComponents/PaginationForm">
          <ListItemButton className="drawer-menu-button">
            <ListItemIcon>
            <DataObjectIcon className="drawer-menu-icon neutral" />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big' } }} className="drawer-menu-item-text" primary="Pagination" />
          </ListItemButton>
          </Link>
        </ListItem>
  
        <ListItem key={"customSelect"} disablePadding>
            <Link href="/CustomComponents/CustomSelect">
            <ListItemButton className="drawer-menu-button">
            <ListItemIcon>
            <DataObjectIcon className="drawer-menu-icon neutral" />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big' } }} className="drawer-menu-item-text" primary="Custom Select" />
          </ListItemButton>
          </Link>
        </ListItem>
      </List>
  
      <Divider />

      
      <List
        className="drawer-menu-list"
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className="drawer-menu-subheader" >
            <StyleIcon /> &nbsp; CSS Exercises
          </ListSubheader>
        }
      >
        <ListItem key={"cssDemo"} disablePadding>
            <Link href="/CssExercises/FlexBoxDemo">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <CodeIcon className="drawer-menu-icon neutral"/>
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big'} }} className="drawer-menu-item-text" primary="Flex Box Playground" />
              </ListItemButton>
          </Link>
        </ListItem>
                
      </List>
      <Divider />
  
  
  {/* NODE FUN */}
      <List
        className="drawer-menu-list"
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className="drawer-menu-subheader" >
            <HexagonIcon /> &nbsp; Node Fun
          </ListSubheader>
        }>
        
        {/*  EXPRESS BACKEND */}
        <ListItem key={"expressbackend2"} disablePadding>
            <Link href="/NodeFun/ExpressBackend2">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <CodeIcon  className="drawer-menu-icon neutral" />
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big' } }} className="drawer-menu-item-text" primary="Express Backend" />
              </ListItemButton>
          </Link>
        </ListItem>
        
        {/*  USING REDUX */}
        <ListItem key={"redux"} disablePadding>
            <Link href="/NodeFun/Redux2">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <CodeIcon  className="drawer-menu-icon neutral" />
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big'} }} className="drawer-menu-item-text" primary="Using Redux" />
              </ListItemButton>
          </Link>
        </ListItem>
  
        {/*  USING CONTEXT API */}
        <ListItem key={"usecontextapi"} disablePadding>
            <Link href="/NodeFun/UseContextApi2">
              <ListItemButton className="drawer-menu-button">
                <ListItemIcon>
                  <CodeIcon  className="drawer-menu-icon neutral" />
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big' } }} className="drawer-menu-item-text" primary="Context API Demo" />
              </ListItemButton>
          </Link>
        </ListItem>
        
      </List>
  
  
  
      <Divider />
      <List>
       
          <ListItem key={'Resume'} disablePadding style={{marginLeft: '-20px'}}>
          <Link href="/resume">
            <ListItemButton className="drawer-menu-button">
                <ListItemIcon sx={{ '& svg':  { width: '20px' } }} >
                  <SummarizeIcon  className="drawer-menu-icon alt-emphasis"/>
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1em', fontFamily: 'Freeman' } }} className="drawer-menu-subheader-text alt-emphasis" primary={'Resume'} />
              </ListItemButton>
              </Link>
          </ListItem>
          
      </List>
    </Box>
    )
};

export default DrawerList;