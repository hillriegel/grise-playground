const checkDirection = (board, row, col, rowStep, colStep, player, direction) => {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (
            row >= 0 &&
            row < 6 &&
            col >= 0 &&
            col < 7 &&
            board[col][row] === player
        ) {
            count++;
            row += rowStep;
            col += colStep;
        } else {
            break;
        }
    }
    return count === 4; //this returns true
};

export default function CheckForWin({ newHoles, rows, cols, currPlayer }) {
    console.log('Checking for win', newHoles);
    // Check for the win in four directions
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            if (newHoles[col][row] === currPlayer) {
                if (
                    checkDirection(newHoles, row, col, 0, 1, currPlayer, 'horizontal') || // horizontal
                    checkDirection(newHoles, row, col, 1, 0, currPlayer, 'vertical') || // vertical
                    checkDirection(newHoles, row, col, 1, 1, currPlayer, 'down-right') || // diagonal down-right
                    checkDirection(newHoles, row, col, 1, -1, currPlayer, 'down-left')   // diagonal down-left
                ) {
                    return true;
                }
            }
        }
    }
    return false;
};
