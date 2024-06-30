"use client";

import { useState, useEffect } from 'react';
import './Board.css';
import Card from './Card';

export default function Board({setMatchesLeft, setAllMatched, cards, setCards}) {
    const handleClickCard = (id) => {
        const clickedCard = cards.find((card) => card.id === id);
        if (clickedCard.isFlipped || clickedCard.isMatched) return;

        setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === id ? { ...card, isFlipped: true } : card
            )
          );

        if(!firstCard) {
            setFirstCard(clickedCard);            
        } else if (!secondCard) {
            setSecondCard(clickedCard);
            setMatchesLeft(prev => prev - 1);
        }
    };
     
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);

    useEffect(() => {
      setAllMatched(cards.every(card => card.isMatched));
    }, [cards, setAllMatched])

    useEffect(() => {
      if (firstCard && secondCard) {
        if (firstCard.symbol === secondCard.symbol) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.symbol === firstCard.symbol ? { ...card, isMatched: true } : card
            )
          );

        } else {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )
            );
          }, 1000);
        }
        setFirstCard(null);
        setSecondCard(null);
      }
    }, [firstCard, secondCard]);

      return (
        <div className="board">

            {cards.map((card) => (
                <Card
                    key={card.id}
                    flipped={card.isFlipped}
                    onClick={() => handleClickCard(card.id)}
                    value={card.symbol}
                    />
            ))}
        </div>
      )
  };