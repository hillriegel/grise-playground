"use client"

import { useState } from 'react';
import Board from './components/Board';
import Players from './components/Players';
import CheckForWin from './components/CheckForWin';

export default function Game() {

  // which is an array of 7 columns of 6 rows

  const rows = 6;
  const cols = 7;
  const initialHoles = Array.from({ length: cols }, () => Array(rows).fill(null));
  const [holes, setHoles] = useState(initialHoles);
  const [currPlayer, setCurrPlayer] = useState('red');
  const [gameOver, setGameOver] = useState(false);

  const handleDrop = (colIndex) => {
    if (gameOver) return;
    
    setHoles(prevHoles => {
      const thisColumn = holes[colIndex];
      const newHoles = prevHoles.map(col => [...col]);

      for (let i = rows; i >= 0; i--) {
        if (thisColumn[i] === null) {
          // Update the specific cell
          newHoles[colIndex][i] = currPlayer;
          if (CheckForWin({newHoles, rows, cols, currPlayer})) {
            setGameOver(true);
            return newHoles;
          } else {
            togglePlayer();
            return newHoles;
          }
        }
      }
      console.log('You cannot play in this column');
      return prevHoles;
    
    });   
}

  const togglePlayer = () => {
    setCurrPlayer(currPlayer === 'red' ? 'blue' : 'red')
  }
  
  return (
    <div>
      <Players currPlayer={currPlayer} gameOver={gameOver} />
      <Board holes={holes} handleDrop={handleDrop} />
    </div>
  );
}
