import React, { useEffect, useRef, useState } from "react";
import '../Game3/Game3.css';

const Paragraph = `Bharat, also known as India, is a land of diverse cultures, languages, and traditions, which together form a vibrant tapestry of history and modernity. Located in South Asia, Bharat is the seventh-largest country by land area and the second-most populous country, home to over 1.4 billion people. The nations history dates back to ancient times, with a civilization that flourished along the Indus River, giving rise to one of the world's earliest urban cultures. Over the millennia, Bharat has been a melting pot of various cultures, religions, and philosophies, including Hinduism, Buddhism, Jainism, and Sikhism, all of which originated here. The cultural diversity of Bharat is reflected in its multitude of languages, with the Indian Constitution recognizing 22 major languages and hundreds of dialects spoken across its states and territories. This linguistic variety adds to the nation's rich cultural heritage, celebrated through literature, music, dance, and cinema.`;

const Typing = () => {
    const MaxTime = 60;
    const [TimeLeft, SetTimeLeft] = useState(MaxTime);
    const [Mistakes, SetMistakes] = useState(0);
    const [WPM, SetWPM] = useState(0);
    const [CPM, SetCPM] = useState(0);
    const [CharIndex, SetCharIndex] = useState(0);
    const [IsTyping, SetIsTyping] = useState(false);
    const [CorrectWrong, SetCorrectWrong] = useState([]);

    const InputRef = useRef(null);
    const CharRef = useRef([]);

    useEffect(() => {
        InputRef.current.focus();
        SetCorrectWrong(new Array(CharRef.current.length).fill(''));
    }, []);

    useEffect(() => {
        let interval;
        if (IsTyping && TimeLeft > 0) {
            interval = setInterval(() => {
                SetTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 1) {
                        SetIsTyping(false);
                        clearInterval(interval);
                        return 0;
                    } else {
                        return prevTimeLeft - 1;
                    }
                });

                let CorrectChars = CharIndex - Mistakes;
                let TotalTime = MaxTime - TimeLeft;

                let cpm = (CorrectChars * 60) / TotalTime;
                cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
                SetCPM(parseInt(cpm, 10));

                let wpm = Math.round((CorrectChars / 5 / TotalTime) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                SetWPM(parseInt(wpm));
            }, 1000);
        } else if (TimeLeft === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [IsTyping, TimeLeft, CharIndex, Mistakes]);

    const HandleChange = (e) => {
        const Characters = CharRef.current;
        let CurrentChar = Characters[CharIndex];
        let TypeChar = e.target.value.slice(-1);

        if (CharIndex < Characters.length && TimeLeft > 0) {
            if (!IsTyping) {
                SetIsTyping(true);
            }
            if (TypeChar === CurrentChar.textContent) {
                SetCharIndex(CharIndex + 1);
                CorrectWrong[CharIndex] = "correct";
            } else {
                SetCharIndex(CharIndex + 1);
                SetMistakes(Mistakes + 1);
                CorrectWrong[CharIndex] = "wrong";
            }
            SetCorrectWrong([...CorrectWrong]);
            if (CharIndex === Characters.length - 1) {
                SetIsTyping(false);
            }
        }
    };

    const HandleReset = () => {
        SetTimeLeft(MaxTime);
        SetMistakes(0);
        SetWPM(0);
        SetCPM(0);
        SetCharIndex(0);
        SetIsTyping(false);
        SetCorrectWrong(new Array(CharRef.current.length).fill(''));
        InputRef.current.value = '';
        InputRef.current.focus();
    };

    return (
        <>
            <div className="Test">
                <input type="text" className="IP" ref={InputRef} onChange={HandleChange} />
                <p className="PP">{Paragraph.split("").map((char, index) => (
                    <span key={index} className={`char ${index === CharIndex ? "active" : ""} ${CorrectWrong[index]}`} ref={(e) => CharRef.current[index] = e}>{char}</span>
                ))}</p>
            </div>
            <div className="Result">
                <p className="PP1">Time Left: {TimeLeft}</p>
                <p className="PP1">Mistakes: {Mistakes}</p>
                <p className="PP1">WPM: {WPM}</p>
                <p className="PP1">CPM: {CPM}</p>
                <button className="TA" onClick={HandleReset}>Try Again</button>
            </div>
        </>
    );
}
export default Typing;