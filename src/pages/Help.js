import { Link } from "react-router-dom";

const Help = () => {
    return ( 
        <div id="help-page" className="page">
            <div id="help-header-wrapper">
                <div id="help-header">
                    <Link to="/" id="back-btn">
                        <svg version="1.1" viewBox="0 0 106.97 192.7" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(-132.42 -96.321)">
                            <path d="m235.88 99.876c-4.704-4.74-12.319-4.74-17.011 0l-83.009 84.2c-4.572 4.62-4.584 12.56 0 17.191l82.997 84.2c4.704 4.74 12.319 4.74 17.011 0 4.704-4.752 4.704-12.439 0-17.191l-74.528-75.61 74.54-75.61c4.692-4.741 4.692-12.428 0-17.18z"/>
                            </g>
                        </svg>
                    </Link>
                    <h1  id="help-title">Help</h1>
                    <div id="help-header-offset"></div>
                </div>
            </div>
            <section className="help-section">
                <h2 className="help-sub-title">How to play</h2>
                <p className="help-text">On your turn, mark any free space on the 3x3 grid. The first player to get 3 of their marks in a row (up, down across or diagonally) is the winner. If all 9 spaces are marked with no winner the game is over.</p>
            </section>
            <section className="help-section">
                <h2 className="help-sub-title">Singleplayer</h2>
                <p className="help-text">Pick a space to play as X or select O to wait a turn and play as O. Use the drop-down in game to select a difficulty level.</p>
            </section>
            <section className="help-section">
                <h2 className="help-sub-title">Multiplayer</h2>
                <p className="help-text">Select local game to play with another player on the same device. Join or create a game with a custom code.</p>
            </section>
        </div>
     );
}
 
export default Help;