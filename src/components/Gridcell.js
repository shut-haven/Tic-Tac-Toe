import PlayerIcon from "./PlayerIcon";

const Gridcell = ({ body, handleClick}) => {
    return (
        <button className="grid-btn" onClick={handleClick}>{body !== '' && <PlayerIcon player={body}/>}</button>
     );
}
 
export default Gridcell;