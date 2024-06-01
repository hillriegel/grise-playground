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


interface DrawerListProps {
    toggleDrawer: (newOpen: boolean) => () => void;
  }

  const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {



    return (
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
  
      <List>
        <ListItem key={"home"} disablePadding>
            <Link href="/portfolio">
              <ListItemButton className="my-listitem-button">
                <ListItemIcon>
                  <CollectionsIcon style={{width: '20px'}}/>
                </ListItemIcon>
                <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '1em', fontFamily: 'Freeman', color: '#888888' } }} primary="Portfolio" />
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
             <ChairIcon  style={{width: '20px'}}/> &nbsp; React Components
          </ListSubheader>
        }
      >

      <ListItem key={"currencyEx"} disablePadding>
            <Link href="/CustomComponents/currencyConverter">
          <ListItemButton className="my-listitem-button">
            <ListItemIcon>
                 <DataObjectIcon style={{width: '20px'}} />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Currency Exchange" />
          </ListItemButton>
          </Link>
        </ListItem>
          <ListItem key={"currencyEx"} disablePadding>
            <Link href="/CustomComponents/grisecon-streamer">
          <ListItemButton className="my-listitem-button">
            <ListItemIcon>
                 <DataObjectIcon style={{width: '20px'}} />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Music Streamer" />
          </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={"currencyEx"} disablePadding>
            <Link href="/CustomComponents/currencyConverter">
          <ListItemButton className="my-listitem-button">
            <ListItemIcon>
                 <DataObjectIcon style={{width: '20px'}} />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Currency Exchange" />
          </ListItemButton>
          </Link>
        </ListItem>
  
        <ListItem key={"sampleForm"} disablePadding>
            <Link href="/CustomComponents/PinochleScorer">
          <ListItemButton className="my-listitem-button">
            <ListItemIcon >
            <DataObjectIcon style={{width: '20px'}} />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Pinochle Scorer" />
          </ListItemButton>
          </Link>
        </ListItem>
        
        <ListItem key={"pagination"} disablePadding>
            <Link href="/CustomComponents/paginationForm">
          <ListItemButton className="my-listitem-button">
            <ListItemIcon>
            <DataObjectIcon style={{width: '20px'}} />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Pagination" />
          </ListItemButton>
          </Link>
        </ListItem>
  
        <ListItem key={"customSelect"} disablePadding>
            <Link href="/CustomComponents/customSelect">
          <ListItemButton className="my-listitem-button">
            <ListItemIcon>
            <DataObjectIcon style={{width: '20px'}} />
            </ListItemIcon>
            <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Custom Select" />
          </ListItemButton>
          </Link>
        </ListItem>
      </List>
  
      <Divider />
      
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: '1em', fontFamily: 'Freeman', color: '#888888'}} >
            <StyleIcon /> &nbsp; CSS Exercises
          </ListSubheader>
        }
      >
        <ListItem key={"cssDemo"} disablePadding>
            <Link href="/CssExercises/flexBoxDemo">
              <ListItemButton className="my-listitem-button">
                <ListItemIcon>
                  <CodeIcon  style={{width: '20px'}}/>
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Flex Box Playground" />
              </ListItemButton>
          </Link>
        </ListItem>
                
      </List>
      <Divider />
  
  
  {/* NODE FUN */}
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: '1em', fontFamily: 'Freeman', color: '#888888'}} >
            <HexagonIcon /> &nbsp; Node Fun
          </ListSubheader>
        }>
        
        {/*  EXPRESS BACKEND */}
        <ListItem key={"expressbackend"} disablePadding>
            <Link href="/NodeFun/expressBackend">
              <ListItemButton className="my-listitem-button">
                <ListItemIcon>
                  <CodeIcon  style={{width: '20px'}}/>
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Express Backend" />
              </ListItemButton>
          </Link>
        </ListItem>
        
              {/*  USING REDUX */}
        <ListItem key={"redux"} disablePadding>
            <Link href="/NodeFun/redux">
              <ListItemButton className="my-listitem-button">
                <ListItemIcon>
                  <CodeIcon  style={{width: '20px'}}/>
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Using Redux" />
              </ListItemButton>
          </Link>
        </ListItem>
  
        {/*  USING CONTEXT API */}
        <ListItem key={"usecontextapi"} disablePadding>
            <Link href="/NodeFun/useContextAPI">
              <ListItemButton className="my-listitem-button">
                <ListItemIcon>
                  <CodeIcon  style={{width: '20px'}}/>
                </ListItemIcon>
                <ListItemText  sx={{ '& .MuiTypography-root': { fontSize: '0.9em', fontFamily: 'Radio Canada Big', color: '#888888' } }} primary="Context API Demo" />
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
    )
};

export default DrawerList;