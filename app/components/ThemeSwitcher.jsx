import { Switch, FormControlLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LiquorIcon from '@mui/icons-material/Liquor';
import CakeIcon from '@mui/icons-material/Cake';


const themes = {
  drinks: ['/themes/drinks/global.css', '/themes/drinks/tooltip.css','/themes/drinks/drawer-menu.css'],
  cake: ['/themes/cake/global.css', '/themes/cake/tooltip.css','/themes/cake/drawer-menu.css']
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('drinks');

  useEffect(() => {
    // Remove all current theme styles
    const existingLinks = document.querySelectorAll('[data-theme-style]');
    existingLinks.forEach(link => link.remove());

    // Load the new theme styles
    themes[theme].forEach(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = file;
      link.setAttribute('data-theme-style', ''); // Mark for easier removal
      document.head.appendChild(link);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'drinks' ? 'cake' : 'drinks');
  };

  const isDrinksMode = theme === 'drinks';

  return (
    <>
    <FormControlLabel
      control={<Switch checked={isDrinksMode} onChange={toggleTheme} style={{color: '#338b9c'}}/>}
      label={isDrinksMode ? <LiquorIcon /> : <CakeIcon />}
      labelPlacement="start"
      style={{ marginLeft: isDrinksMode ? '0' : 'auto', marginRight: isDrinksMode ? 'auto' : '0' }}
    />



    <div style={{marginTop: '5px'}}>
 
        <link rel="stylesheet" href={`/${theme}.css`} key="theme-style" />
     
      </div>
      </>
  );
  
};

export default ThemeSwitcher;
