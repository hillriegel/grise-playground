import { Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LiquorIcon from '@mui/icons-material/Liquor';
import CakeIcon from '@mui/icons-material/Cake';
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('global');

  const toggleTheme = () => {
    setTheme(theme === 'global' ? 'global-glow' : 'global');
    //setTheme(theme === 'global' ? 'alt-mode' : 'global');
  };

  const isNightMode = theme === 'global';

  return (
    <>
    <FormControlLabel
      control={<Switch checked={isNightMode} onChange={toggleTheme} style={{color: '#338b9c'}}/>}
      label={isNightMode ? <LiquorIcon /> : <CakeIcon />}
      labelPlacement="start"
      style={{ marginLeft: isNightMode ? '0' : 'auto', marginRight: isNightMode ? 'auto' : '0' }}
    />



    <div style={{marginTop: '5px'}}>
 
        <link rel="stylesheet" href={`/${theme}.css`} key="theme-style" />
     
      </div>
      </>
  );
  
};

export default ThemeSwitcher;
