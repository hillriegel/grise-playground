

export default function Score({matchesLeft}) {



    return (
        <div style={{display: 'flex', justifyContent: 'right', width: '70vw'}}>
          Attempts left: {matchesLeft}
        </div>
    )
}