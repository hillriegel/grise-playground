"use client";

import { useState, useEffect } from 'react';
import './Board.css';
import Card from './Card';
import { CardSymbols } from './CARD_SYMBOLS';



export default function Board({setMatchesLeft}) {

    const numCards = 20;

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    const selectedSymbols = shuffleArray([...CardSymbols]).slice(0, numCards/2);
    

    let allCards = [];

    for (let i=0; i<numCards/2; i++) {
        allCards.push(selectedSymbols[i])
    }


    const allSymbols = [...allCards, ...allCards];
    const thisGameSymbols = shuffleArray(allSymbols);



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

    const initialCards = thisGameSymbols.map((item, index) => ({
        id: index,
        symbol:item,
        isFlipped: false,
        isMatched: false,
      }));

      const [cards, setCards] = useState(initialCards);
      const [firstCard, setFirstCard] = useState(null);
      const [secondCard, setSecondCard] = useState(null);



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