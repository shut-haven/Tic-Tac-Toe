export function miniMax(position, gameState, depth, alpha, beta) {
    // Check for end game
    if (!gameState.active) {
        return position;
    }

    // Mini Max just needs to traverse all nodes and return 1 of the 3 score options: x won, o won, draw scores only matters at final game board state
}