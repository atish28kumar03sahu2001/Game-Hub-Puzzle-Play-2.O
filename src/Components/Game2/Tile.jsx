import React from "react";
import '../Game2/Game2.css';
const Tile = ({ number, MoveTile}) => {
    return (
        <>
            <div onClick={()=>MoveTile(number)} className={`Tile ${number.value === number.index + 1 ? 'correct' : ''} ${number.value === 16 ? 'disabled' : ''} slot--${number.index} `}>
                {number.value === 16 ? '' : number.value}
            </div>
        </>
    );
}
export default Tile;