"use client";

import Game from './game';

import { useState, useEffect } from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function App() {


  return (
      <main className="flex min-h-screen flex-col">
      <div className="page-title">
        <h1><SportsEsportsIcon style={{marginTop: '4px'}} /> &nbsp; Games :: Connect 4</h1>
      </div>
      <br />
    <div className="main-content">
        <Game />
    </div>
    </main>
  );
}

export default App;
