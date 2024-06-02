import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('global');

  const toggleTheme = () => {
    setTheme(theme === 'global' ? 'alt-mode' : 'global');
  };

  return (
    <div style={{marginTop: '5px'}}>
 
        <link rel="stylesheet" href={`/${theme}.css`} key="theme-style" />

        {theme === 'global' && <DarkModeIcon onClick={toggleTheme} style={{cursor: 'pointer'}}/> }
        {theme === 'alt-mode' && <LightModeIcon onClick={toggleTheme} style={{cursor: 'pointer'}}/> }

     
      </div>
  );
};

export default ThemeSwitcher;
