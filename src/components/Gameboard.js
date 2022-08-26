import Gridcell from "./Gridcell";

const Gameboard = ({ grid, handleTurn }) => {

    let cells = [];

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            cells.push(<Gridcell body={grid[x][y]} handleClick={() => { handleTurn(x, y); }} key={`${x}${y}`}/>)
        }
    }

    return ( 
        <div id="game-board">
            <div id="game-board-wrapper">
                <svg id="game-board-divider" version="1.1" viewBox="0 0 362.67 362.67" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(213.84 380.16)">
                    <g transform="translate(-387.8 -411.24)">
                    <path d="m293.31 35.717v353.41"/>
                    <path d="m417.29 35.716v353.41"/>
                    <path d="m178.6 150.43h353.41"/>
                    <path d="m178.6 274.41h353.4"/>
                    </g>
                    </g>
                </svg>
                <div id="game-grid">
                    { cells }
                </div>
            </div>
        </div>
     );
}
 
export default Gameboard;