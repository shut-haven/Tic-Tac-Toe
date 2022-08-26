import { Link } from "react-router-dom";

const MainMenu = () => {
    return ( 
        <div id="main-menu" className="page">
            <div id="title-wrapper">
                <h1 id="title">Tic Tac Toe</h1>
            </div>
            <div id="menu-options">
                <Link className="menu-btn" to="/singleplayer">Singleplayer</Link>
                <Link className="menu-btn" to="/multiplayer">Multiplayer</Link>
                <Link className="menu-btn" to="/help">Help</Link>
            </div>
        </div>
     );
}
 
export default MainMenu;