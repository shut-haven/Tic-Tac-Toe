export function turn(x, y, gameState) {

    // Check if the space is already marked 
    if (gameState.grid[x][y] !== '') {
        return false;
    }

    // Create copy of game state
    let nextGameState = JSON.parse(JSON.stringify(gameState));

    // Mark cell
    nextGameState.grid[x][y] = nextGameState.player;

    // Set vectors
    const cellVectors = [
        ...(nextGameState.scores.x[x] !== false ? [['x', x]] : []), 
        ...(nextGameState.scores.y[y] !==  false ? [['y', y]] : []), 
        ...(nextGameState.scores.cross[0] !== false && x === y ? [['cross', 0]] : []), 
        ...(nextGameState.scores.cross[1] !== false && x + y === 2 ? [['cross', 1]] : [])
    ];

    for (let [dir, pos] of cellVectors) {

        const currentScore = nextGameState.scores[dir][pos];
        
        // Check if the opponent has the current vector
        if ((nextGameState.player === 'x' && currentScore > 0) || 
            (nextGameState.player === 'o' && currentScore < 0)) {
                nextGameState.scores[dir][pos] = false;
                continue;
        }

        // Update count for vector
        let playerVal = nextGameState.player === 'x' ? -1 : 1;
        let updatedScore = currentScore + playerVal;

        nextGameState.scores[dir][pos] = updatedScore;

        // Win
        if (updatedScore === -3 || updatedScore === 3) {
            nextGameState.active = false;
            nextGameState.winner = true;
            nextGameState.status = `${nextGameState.player} wins`
            return nextGameState;
        }
    }
    
    nextGameState.turns -= 1;

    if (!nextGameState.turns) {
        nextGameState.active = false;
        nextGameState.status = 'Game Over'
    } 
    else {
        const opponent = nextGameState.opponent;
        nextGameState.opponent = nextGameState.player;
        nextGameState.player = opponent;
        nextGameState.status = `${nextGameState.player}'s turn`;
        nextGameState.aiTurn = !nextGameState.aiTurn;
    }
    
    return nextGameState;
}

export function aiTurn(diff, gameState) {

    const advantage = (diff === 'Medium' && gameState.turns > 6);
    let cords = {x: 0, y: 0};

    if (diff !== 'Easy' && !advantage) {
        console.log('AI should use min max');
        // AI is always the maximizing player

        // Use original game state instead of next game state

        let bestScore = -Infinity;

        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                if (gameState.grid[x][y] !== '') {
                    continue;
                }

                let next 
            }
        }
    }
    else {
       console.log('AI should use random space');
       let x = 0, y = 0;

       do {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);
       } while (gameState.grid[x][y] !== '');

       console.log(`AI selected space X:${x} Y:${y}`);
       cords.x = x;
       cords.y = y;
    }

    return cords;
    
}