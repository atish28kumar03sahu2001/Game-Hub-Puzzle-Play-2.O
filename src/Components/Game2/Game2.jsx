import React from "react";
import '../Game2/Game2.css';
import Board from "./Board";
const Game2 = () => {
    return (
        <div className="GAME2">
            <div className="SHD"><h1 className="SHDH1">15-Sliding Puzzle</h1></div>
            <div className="GBDY">
                <div>
                    <Board />
                </div>
            </div>
        </div>
    );
}
export default Game2;