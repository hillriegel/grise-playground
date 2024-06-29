"use client"

import { useEffect } from 'react';

function ArrowKeyHandler({direction, setDirection}) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            setDirection((prevDirection) => {
                switch (event.key) {
                    case 'ArrowUp':
                        return prevDirection !== 'down' ? 'up' : prevDirection;
                    case 'ArrowDown':
                        return prevDirection !== 'up' ? 'down' : prevDirection;
                    case 'ArrowLeft':
                        return prevDirection !== 'right' ? 'left' : prevDirection;
                    case 'ArrowRight':
                        return prevDirection !== 'left' ? 'right' : prevDirection;
                    default:
                        return prevDirection; // No change for other keys
                }
            });
        };

        // Attach the event listener to the window object
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array ensures this effect runs only once

}

export default ArrowKeyHandler;
