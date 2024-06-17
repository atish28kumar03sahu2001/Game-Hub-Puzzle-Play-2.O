import React, { useEffect, useState } from "react";
import Overlay from "./Overlay";
import '../Game2/Game2.css';
import Tile from "./Tile";
import Winner from "./Winner";

const Board = () => {
    const suffle = () =>
        new Array(16)
            .fill()
            .map((_, i) => (i + 1))
            .sort(() => Math.random() - .5)
            .map((x, i) => ({ value: x, index: i }));

    const [numbers, setNumbers] = useState([]);
    const [animation, setAnimation] = useState(false);

    const MoveTile = tile => {
        const t16 = numbers.find(n => n.value === 16).index;
        if (![t16 - 1, t16 + 1, t16 - 4, t16 + 4].includes(tile.index) || animation) return;

        const newNumbers = [...numbers].map(number => {
            if (number.index !== t16 && number.index !== tile.index) return number;
            if (number.value === 16) return { value: 16, index: tile.index };
            return { value: tile.value, index: t16 };
        });
        setAnimation(true);
        setNumbers(newNumbers);
        setTimeout(() => setAnimation(false), 400);
    };

    const HandleKeyDown = event => {
        const t16 = numbers.find(n => n.value === 16).index;
        if (event.keyCode === 37 && !(t16 % 4 === 3)) MoveTile(numbers.find(n => n.index === t16 + 1));
        if (event.keyCode === 38 && !(t16 > 11)) MoveTile(numbers.find(n => n.index === t16 + 4));
        if (event.keyCode === 39 && !(t16 % 4 === 0)) MoveTile(numbers.find(n => n.index === t16 - 1));
        if (event.keyCode === 40 && !(t16 < 4)) MoveTile(numbers.find(n => n.index === t16 - 4));
    };

    const ResetGame = () => {
        setNumbers(suffle());
    };

    useEffect(ResetGame, []);
    useEffect(() => {
        document.addEventListener("keydown", HandleKeyDown);
        return () => document.removeEventListener('keydown', HandleKeyDown);
    }, [numbers]);

    return (
        <>
            <div className="GameBoard">
                <div className="Board">
                    <Overlay />
                    {numbers.map((x, i) => (
                        <Tile key={i} number={x} MoveTile={MoveTile} />
                    ))}
                </div>
                <Winner numbers={numbers} />
            </div>
            <div className="Boardd-Btn" onClick={ResetGame}>
                <button className="BRDBTN">New Game</button>
            </div>
        </>
    );
};
export default Board;