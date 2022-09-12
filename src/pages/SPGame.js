import { useState, useEffect, useRef, useCallback } from "react";
import  useLocalStorage  from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { turn } from "../util/Game";
import CustomSelect from "../components/CustomSelect";
import Gameboard from "../components/Gameboard";

const SPGame = () => {

    const [singlePlayer, setSinglePlayer] = useLocalStorage('singlePlayer', true);
    const [difficulty, setDifficulty] = useLocalStorage('difficulty', 'Medium');

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

    const changeDifficulty = (option) => {
        console.log('Change diff ran');
        console.log(option);
        setDifficulty(option);
        restartGame();
    };
    
    const changePlayerMode = () => {
        console.log('Change player mode ran');
        setSinglePlayer(!singlePlayer);
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
                    <button id="player-mode" onClick={changePlayerMode}>
                        <span id="player-count">{singlePlayer ? 1 : 2}p</span>
                        <svg version="1.1" viewBox="0 0 93.889 64.419" xmlns="http://www.w3.org/2000/svg">
                       <g transform="translate(653.22 208.35)">
                        <g transform="matrix(.26458 0 0 .26458 -653.22 -223.08)">
                        {!singlePlayer &&
                         <path d="m307.94 199.17c16.571-15.084 26.979-36.832 26.979-61.008 0-45.55-36.925-82.474-82.474-82.474-33.914 0-63.045 20.476-75.713 49.737 15.541 17.534 24.992 40.582 24.992 65.8 0 21.149-6.804 41.654-19.089 58.524 11.606 10.24 21.178 22.617 28.169 36.35h144.05c-5.989-28.156-23.288-52.126-46.913-66.929z"/>
                        }
                         <path d="m0 299.17h204.81c-5.986-28.155-23.285-52.126-46.912-66.929 16.573-15.084 26.979-36.832 26.979-61.009 0-45.549-36.924-82.474-82.474-82.474-45.545 0-82.471 36.925-82.471 82.474 0 24.177 10.404 45.925 26.978 61.009-23.627 14.803-40.925 38.773-46.911 66.929z"/>
                        </g>
                       </g>
                      </svg>
                    </button>
                    {singlePlayer && 
                        <CustomSelect options={['Easy', 'Medium', 'Impossible']} onSelect={changeDifficulty} initSelection={difficulty}/>
                    }
                </div>
                <div id="game-info">
                    <div id="score-board">
                        <div className={'player-score' + (gameState.player === 'x' ? ' turn' : '')} id="x-score">
                            <span className="player">X</span>
                            <span id="x-wins">{xScore ? xScore : '-'}</span>
                        </div>
                        <div className={'player-score' + (gameState.player === 'o' ? ' turn' : '')} id="o-score"
                        onClick={() => {
                            if (gameState.turns === 9 && singlePlayer) {
                                console.log('The user switched players');
                                setGameState({...gameState, aiTurn: true});
                            }
                        }}
                        >
                            <span className="player">O</span>
                            <span id="o-wins">{oScore ? oScore : '-'}</span>
                        </div>
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