

export default function Score({matchesLeft, allMatched, initializeGame}) {

    console.log('allMatched = ', allMatched);

    return (
        <div style={{display: 'flex', justifyContent: 'right', width: '70vw'}}>
          {allMatched && <button onClick={initializeGame}>You Did It! Reset Game</button>}
          {!allMatched && <>Attempts left: {matchesLeft}</>}
        </div>
    )
}