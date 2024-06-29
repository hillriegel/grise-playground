import classes from './SnakeGame.module.css';

export default function GameBoard({ grid }) {
    return( 
        <div className={classes.board}>
           {grid.map(row => (
                row.map(cell => (
                    <div 
                        key={cell.id}
                        className={`${classes.cell} ${cell.state === 'snake' ? 
                            classes.snakecell : cell.state === 'food' ? classes.foodcell : ''}`}
                            id={`cell-${cell.id}`}
                    
                    />

                ))
            ))
            }
        </div>
    )
}