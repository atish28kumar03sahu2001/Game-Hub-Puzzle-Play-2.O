import React, { useState, useEffect } from "react";
import '../Game4/Game4.css';
import ArrayImage from "./Array";
import Card from "./Card";
import GameOver1 from "./GameOver";

const Game4 = () => {
    const [cards, SetCard] = useState([]);
    const [SelectedCard, SetSelectedCard] = useState([]);
    const [Score, SetScore] = useState(0);
    const [Tries, SetTries] = useState(0);
    const [GameOver, SetGameOver] = useState(false);

    const ShuffleImages = () => {
        let shuffleArray = [...ArrayImage, ...ArrayImage].map((item, index) => ({ ...item, id: index + 1 })).sort(() => 0.5 - Math.random());
        SetScore(0);
        SetTries(0);
        SetSelectedCard([]);
        SetCard(shuffleArray);
    };

    useEffect(() => {
        ShuffleImages();
    }, []);

    useEffect(() => {
        if (SelectedCard.length === 2) {
            setTimeout(() => {
                CheckMatch();
                SetSelectedCard([]);
            }, 1000);
        }
    }, [SelectedCard]);

    const CheckMatch = () => {
        if (SelectedCard[0].num === SelectedCard[1].num) {
            SetScore(prev => prev + 1);
            SetCard(prevCards => prevCards.map(card => card.num === SelectedCard[0].num ? { ...card, isMatch: true } : card));
        } else {
            SetTries(prev => prev + 1);
        }
    };

    useEffect(() => {
        if (Score === ArrayImage.length) {
            setTimeout(() => {
                SetGameOver(true);
            }, 1000);
        }
    }, [Score]);

    const HandleRestart = () => {
        SetGameOver(false);
        ShuffleImages();
    };

    return (
        <>
            {GameOver && <GameOver1 Tries={Tries} HandleRestart={HandleRestart} />}
            <div className="MCHD">
                <h1 className="MCH1">Memory Card Game</h1>
            </div>
            <div className="MainContainer">
                <div className="Container">
                    {cards.map(card => (
                        <Card key={card.id} card={card} SetSelectedCard={SetSelectedCard} SelectedCard={SelectedCard} />
                    ))}
                </div>
            </div>
            <div className="Score-Container">
                <p className="Score">Score: {Score}</p>
                <p className="Tries">Tries: {Tries}</p>
            </div>
        </>
    );
};
export default Game4;