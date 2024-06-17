import React from "react";
import '../Welcome/Welcome.css';
import { Link } from "react-router-dom";
const Welcome = () => {
    return (
        <>
            <div className="HD">
                <h1 className="HDH1">Game Hub: Puzzle & Play 2.O</h1>
            </div>
            <div className="ONE">
                <h2 className="ONEH2">Welcome To</h2>
                <h2 className="ONEH22">Game Hub: Puzzle & Play 2.O</h2>
            </div>
            <div className="TWO">
                <h2 className="ONEH2">About Game Hub 2.O</h2>
                <p className="TWOP">
                    Introducing <b>Game Hub: Puzzles & Play 2.O</b>—an enhanced gaming sanctuary for enthusiasts, now powered by React JS. This upgraded version features new addictive games, meticulously crafted for seamless play across all devices. Highlights include the <b>Password Game</b>, humorously challenging users with irritating password tasks; the <b>15-Sliding Puzzle Game</b>, perfect for puzzle lovers; and the <b>Typing Speed Test Game</b>, helping you improve your typing skills. Sharpen your memory with the <b>Memory Card Game</b> and enjoy endless hours of entertainment with cutting-edge technology and captivating pixel art. What sets <b>Game Hub: Puzzles & Play 2.O</b> apart is its modern React JS development, ensuring a responsive, immersive experience on desktop, mobile, tablet, and laptop. Dive into <b>Game Hub: Puzzles & Play 2.0</b> and experience the ultimate in gaming fun.
                </p>
            </div>
            <div className="TWO">
                <h2 className="ONEH2">About Author</h2>
                <p className="TWOP">
                    Greetings! I'm Atish Kumar Sahu, a dedicated Full-Stack Software & Web Developer from Berhampur, Odisha, India. With a B.Tech in Computer Science Engineering from Parala Maharaja Engineering College (2022), I've honed my skills in Java, Web Development (HTML, CSS, JavaScript), Frontend (React, Next, Vue), Backend (Node, Express), and Databases (MongoDB, MySQL). I have experience as a Junior Application Developer at Pantheon Inc (June 2022 to October 2022). I seek challenging roles to fuel my passion for continuous learning and innovation, making me a valuable asset to dynamic teams.
                </p>
            </div>
            <div>
                <h2 className="ONEH2">Work Sample</h2>
                <div className="GMLST">
                    <Link to="/PasswordGame" className="LCH" target="_blank">Password Game</Link>
                    <Link to="/PuzzleSlidingGame" className="LCH" target="_blank">Puzzle Sliding Game</Link>
                    <Link to="/TypingSpeedGame" className="LCH" target="_blank">Typing Speed Game</Link>
                    <Link to="/MemoryCardGame" className="LCH" target="_blank">Memory Card Game</Link>
                </div>
            </div>
        </>
    );
}
export default Welcome;