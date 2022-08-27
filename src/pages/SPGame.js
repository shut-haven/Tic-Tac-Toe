import { useState, useEffect, useRef } from "react";
import  useLocalStorage  from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { turn } from "../util/Game";
import Gameboard from "../components/Gameboard";

const SPGame = () => {

    const [difficulty, setDifficulty] = useLocalStorage('medium');

    const defaultGameState = {
        active: true,
        winner: false,
        status: "X's turn",
        turns: 9,
        aiTurn: false,
        player: 'x',
        opponent: 'o',
        grid: [['', '', ''], ['', '', ''], ['', '', '']],
        scores: {
            x: [0, 0, 0],
            y: [0, 0, 0],
            cross: [0, 0]
        }
    };

    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [gameState, setGameState] = useState(defaultGameState);

    const setScore = (winner) => {
        if (winner === 'x') {
            setXScore(xScore + 1);
        }
        else {
            setOScore(oScore + 1);
        }
    }

    const restartGame = () => {
        setGameState(defaultGameState);
    }

    const changeDifficulty = (event) => {
        const val = event.target.value;
        setDifficulty(val);
        restartGame();
    }

    const handleTurn = (x, y) => {
        
        if (!gameState.active) return;

        try {
            const nextGameState = turn(x, y, gameState)

            if (!nextGameState) {
                throw new Error('Something went wrong on turn');
            }

            setGameState(nextGameState);

            if (nextGameState.winner) {
                console.log('Score should have been updated');
                setScore(gameState.player);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (gameState.aiTurn) {
            console.log('AI turn should have ran');
        }
    }, [gameState]);

    return ( 
        <div id="sp-game" className="page">
            <div id="game-hud">
                <div id="game-options">
                    <select name="difficulty" id="difficulty-select" value={difficulty} onChange={changeDifficulty}>
                        <option className="difficulty-option" value="easy">Easy</option>
                        <option className="difficulty-option" value="medium">Medium</option>
                        <option className="difficulty-option" value="impossible">Impossible</option>
                    </select>
                    <button id="player-count">1P</button>
                </div>
                <div id="game-info">
                    <div id="score-board">
                        <button className={'score-btn' + (gameState.player === 'x' ? ' turn' : '')} id="x-score">
                            <span className="player">X</span>
                            <span id="x-wins">{xScore ? xScore : '-'}</span>
                        </button>
                        <button className={'score-btn ' + (gameState.player === 'o' ? ' turn' : '')} id="o-score">
                            <span className="player">O</span>
                            <span id="o-wins">{oScore ? oScore : '-'}</span>
                        </button>
                    </div>
                    <p className="game-status">{gameState.status}</p>
                </div>
            </div>
            <Gameboard grid={gameState.grid} handleTurn={handleTurn}/>
            <div id="game-controls">
                <button id="restart-game-btn" onClick={restartGame}>Restart Game</button>
                <Link id="return-to-menu" to="/">Exit Game</Link>
            </div>
        </div>
     );
}
 
export default SPGame;