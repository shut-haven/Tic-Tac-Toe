import  turn  from "./Game";

export function miniMax(gameState, depth, alpha, beta, maximizing) {
    // Check for end game
    if (!gameState.active) {
        
        if (gameState.winner) {
            return maximizing ? (100 - depth) : (-100 + depth);
        }
        else {
            return 0;
        }
    }

    // Mini Max just needs to traverse all nodes and return 1 of the 3 score options: x won, o won, draw scores only matters at final game board state

    let bestScore = 0;

    // Use original game state instead of next game state

    if (maximizing) {
        let maxScore = -Infinity;
        
        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                if (gameState.grid[x][y] !== '') {
                    continue;
                }

                let nextGameState = turn(x, y, gameState);
                // Recursive call to min-max
                let score = miniMax(nextGameState, depth + 1, alpha, beta, false);

                maxScore = Math.max(score, maxScore);
                 
                alpha = Math.max(alpha, maxScore);
                if (beta <= alpha) {
                    break;
                }
            }
        }
        bestScore = maxScore;
    }
    else {
        let minScore = Infinity;

        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                if (gameState.grid[x][y] !== '') {
                    continue;
                }

                let nextGameState = turn(x, y, gameState);
                // Recursive call to min-max
                let score = miniMax(nextGameState, depth + 1, alpha, beta, true);

                minScore = Math.min(score, minScore);

                beta = Math.min(beta, minScore);
                if (beta <= alpha) {
                    break;
                }
            }
        }
        bestScore = minScore;
    }

    return bestScore;
}