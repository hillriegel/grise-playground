import './Board.css';

export default function Players({currPlayer, gameOver}) {
    return (
        <>
            {gameOver && 
                <h2>
                    <div className={`player ${currPlayer}`}>{currPlayer.toUpperCase()} wins! </div>
                </h2>
            }
            {!gameOver && 
                <>
                <h2><div className={`player ${currPlayer}`}>{currPlayer.toUpperCase()}&apos;s turn</div></h2>
                <h3>Click on a column to drop your piece.</h3>
                </>
            }
        </>
    )
}