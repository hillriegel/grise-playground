"use client"
import ArrowKeyHandler from './ArrowKeyHandler';
import { useEffect, useState, useRef } from 'react'; 
import { motion } from 'framer-motion';
import GameBoard from './GameBoard';
import Score from './Score';
import classes from './SnakeGame.module.css';

export default function SnakeGame() {
    const numRows = 20;
    let initialGrid = [];

    const createInitialGrid = () => {
        let cellId = 0;
        for (let i = 0; i < numRows; i++) {
            let row = [];
            for (let j = 0; j < numRows; j++) {
                row.push({ id: cellId++, row: i, col: j, state: null });
            }
            initialGrid.push(row);
        }
        return initialGrid;
    }

    const initialSnake = [
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]
    ];

    const generateFood = (snake) => {
        let newFood;
        do {
            newFood = [Math.floor(Math.random() * numRows), Math.floor(Math.random() * numRows)];
        } while (snake.some(snakeCell => snakeCell[0] === newFood[0] && snakeCell[1] === newFood[1]));
        return newFood;
    };

    const [grid, setGrid] = useState(createInitialGrid());
    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState(generateFood(initialSnake));
    const [direction, setDirection] = useState('down');
    const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
    const intervalRef = useRef(null); // Ref to store the interval ID
    const [score, setScore] = useState(6);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const newGrid = grid.map(row => {
            return row.map(cell => {
                const isSnakeCell = snake.some(snakeCell => snakeCell[0] === cell.row && snakeCell[1] === cell.col);
                const isFoodCell = (food[0] === cell.row && food[1] === cell.col);

                if (isSnakeCell) {
                    return { ...cell, state: 'snake' };
                } else if (isFoodCell) {
                    return { ...cell, state: 'food' };
                }
                return { ...cell, state: null }; // Reset cell state if it's neither
            });
        });

        setGrid(newGrid);
    }, [food, snake]);

    const startInterval = (speed) => {
        intervalRef.current = setInterval(() => {
            setSnake(prevSnake => {
                const newSnake = [...prevSnake];
                const head = newSnake[newSnake.length - 1];

                let newHead;
                switch (direction) {
                    case 'up':
                        if (head[0] - 1 < 0) {
                            setIsPlaying(false);
                            setGameOver(true);
                            stopInterval();
                            return newSnake;
                        }
                        newHead = [head[0] - 1, head[1]];
                        break;
                    case 'down':
                        if (head[0] + 1 >= numRows) {
                            setIsPlaying(false);
                            setGameOver(true);
                            stopInterval();
                            return newSnake;
                        }
                        newHead = [head[0] + 1, head[1]];
                        break;
                    case 'left':
                        if (head[1] - 1 < 0) {
                            setIsPlaying(false);
                            setGameOver(true);
                            stopInterval();
                            return newSnake;
                        }
                        newHead = [head[0], head[1] - 1];
                        break;
                    case 'right':
                        if (head[1] + 1 >= numRows) {
                            setIsPlaying(false);
                            setGameOver(true);
                            stopInterval();
                            return newSnake;
                        }
                        newHead = [head[0], head[1] + 1];
                        break;
                    default:
                        newHead = head;
                }

                // Check for collision with itself
                if (newSnake.some(snakeCell => snakeCell[0] === newHead[0] && snakeCell[1] === newHead[1])) {
                    setIsPlaying(false);
                    setGameOver(true);
                    stopInterval();
                    return newSnake;
                }

                newSnake.push(newHead);

                if (newHead[0] === food[0] && newHead[1] === food[1]) {
                    // Handle food consumption
                    setFood(generateFood(newSnake)); // Generate new food location
                    setScore(prev => prev + 1); // Increment score
                } else {
                    newSnake.shift(); // Remove the tail if no food consumed
                }

                return newSnake;
            });
        }, speed);
    };

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (isPlaying && !gameOver) {
            const speed = calculateSpeed(score);
            startInterval(speed);
        } else {
            stopInterval();
        }

        return () => stopInterval(); // Clean up the interval on component unmount
    }, [isPlaying, direction, gameOver]); // Add isPlaying, direction, and gameOver as dependencies

    const togglePlayPause = () => {
        if (!gameOver) {
            setIsPlaying(prevState => !prevState);
        }
    };

    const resetGame = () => {
        stopInterval(); // Ensure any running interval is stopped
        //setGrid(createInitialGrid());
        setSnake(initialSnake);
        setFood(generateFood(initialSnake));
        setDirection('down');
        setIsPlaying(false); // State to track play/pause
        setScore(6);
        setGameOver(false);
    }

    const calculateSpeed = (score) => {
        const minSpeed = 100; // Minimum speed in milliseconds
        const maxSpeed = 500; // Maximum speed in milliseconds
        const speedIncreaseRate = 10; // Rate at which speed increases

        return Math.max(minSpeed, maxSpeed - (score * speedIncreaseRate));
    };

    return (
        <div>
            <ArrowKeyHandler setDirection={setDirection} />
            <div className={classes.controls}>
                <Score score={score}/>
                {gameOver && <h1>Game Over!</h1>}
                {!gameOver && 
                    <button className={classes.pauseButton} onClick={togglePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                }
                {gameOver && 
                    <button className={classes.pauseButton} onClick={resetGame}>
                        Reset
                    </button>
                }
            </div>
            <br />
            <div style={{ width: '900px', position: 'relative', height: '600px' }}>
                <GameBoard grid={grid} />
            </div>
        </div>
    )
}
