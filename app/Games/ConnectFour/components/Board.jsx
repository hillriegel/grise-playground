import './Board.css';

export default function Board({holes, handleDrop}) {
    return (
        <div className="board">
            {/* have to loop through each column array and create a column, which seems like something to do in a flex display layout */}
            {holes.map((column, index) => (
                <div key={index} className="column" onClick={() => handleDrop(index)}>
                    {column.map((hole, i) => (<div key={[index,i]} className={`hole ${hole}`} />))}
                </div>
                    
                ))
            }
        </div>
    )
}