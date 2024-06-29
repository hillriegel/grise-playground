"use client";

import Board from './components/Board.jsx';
import Score from './components/Score.jsx';
import { useState, useEffect } from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { CardSymbols } from './components/CARD_SYMBOLS.jsx';

function App() {

  const [matchesLeft, setMatchesLeft] = useState(25);
  const [allMatched, setAllMatched] = useState(false);

  const numCards = 20;
  let initialCards = [];
  const [cards, setCards] = useState(initialCards);

  const initializeGame = () => {
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
  
    const selectedSymbols = shuffleArray([...CardSymbols]).slice(0, numCards/2);
    

    let allCards = [];

    for (let i=0; i<numCards/2; i++) {
        allCards.push(selectedSymbols[i])
    }


    const allSymbols = [...allCards, ...allCards];
    const thisGameSymbols = shuffleArray(allSymbols);  

    initialCards = thisGameSymbols.map((item, index) => ({
      id: index,
      symbol:item,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(initialCards);
    setMatchesLeft(25);
  }

  useEffect(() => {
    initializeGame();
  },[]);
 

  return (
      <main className="flex min-h-screen flex-col">
      <div className="page-title">
        <h1><SportsEsportsIcon style={{marginTop: '4px'}} /> &nbsp; Games :: Memory Cards</h1>
      </div>
      <br />
    <div className="main-content">
        <Score matchesLeft={matchesLeft} allMatched={allMatched} initializeGame={initializeGame} />
        <Board setMatchesLeft={setMatchesLeft} setAllMatched={setAllMatched} cards={cards} setCards={setCards} />
    </div>
    </main>
  );
}

export default App;