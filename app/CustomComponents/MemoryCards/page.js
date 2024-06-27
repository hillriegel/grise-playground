"use client";

import Board from './components/Board.jsx';
import Score from './components/Score.jsx';
import { useState } from 'react';
import ChairIcon from '@mui/icons-material/Chair';

function App() {

  const [matchesLeft, setMatchesLeft] = useState(25);

  return (
    <main className="flex min-h-screen flex-col">
    <div className="page-title">
      <h1><ChairIcon style={{marginTop: '4px'}} /> &nbsp; React Components :: Memory Card Game</h1>
    </div>
    <br />
    <div className="main-content">
        <h2>Memory Card Game</h2>
        <Score matchesLeft={matchesLeft} />
        <Board setMatchesLeft={setMatchesLeft} />
    </div>
    </main>
  );
}

export default App;
