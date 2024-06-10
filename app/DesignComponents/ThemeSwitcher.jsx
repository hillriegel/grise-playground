import { Switch, FormControlLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import LiquorIcon from '@mui/icons-material/Liquor';
import CakeIcon from '@mui/icons-material/Cake';

const themes = {
  drinks: ['/themes/drinks/global.css', '/themes/drinks/tooltip.css', '/themes/drinks/drawer-menu.css'],
  cake: ['/themes/cake/global.css', '/themes/cake/tooltip.css', '/themes/cake/drawer-menu.css']
};


const useLinkStyles = (themeFiles) => {
  useEffect(() => {
    // Create link elements for each file
    const links = themeFiles.map(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.style.opacity = '0'; // Start invisible
      link.style.transition = 'opacity 1.5s ease'; // Transition setup
      document.head.appendChild(link);
      // Force reflow/repaint to ensure the transition will occur
      link.offsetHeight; // Accessing offsetHeight to trigger reflow
      link.style.opacity = '1'; // Trigger the transition to visible
      return link;
    });

    // Cleanup function to fade out and remove links
    return () => {
      links.forEach(link => {
        link.style.opacity = '0'; // Start transition to invisible
        setTimeout(() => document.head.removeChild(link), 0); // Wait for transition
      });
    };
  }, [themeFiles]);
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('drinks');

  // Using the custom hook to manage all theme stylesheets
  useLinkStyles(themes[theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'drinks' ? 'cake' : 'drinks');
  };

  const isDrinksMode = theme === 'drinks';

  return (
    <FormControlLabel
      control={<Switch checked={isDrinksMode} onChange={toggleTheme} style={{ color: '#338b9c' }} />}
      label={isDrinksMode ? <LiquorIcon /> : <CakeIcon />}
      labelPlacement="start"
      style={{ marginLeft: isDrinksMode ? '0' : 'auto', marginRight: isDrinksMode ? 'auto' : '0' }}
      className="neutral"
      tabIndex={3}
      alt="theme switcher"
    />
  );
};

export default ThemeSwitcher;
