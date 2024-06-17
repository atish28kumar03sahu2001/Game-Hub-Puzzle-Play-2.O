import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome/Welcome";
import Game1 from "./Components/Game1/Game1";
import Game2 from "./Components/Game2/Game2";
import Game3 from "./Components/Game3/Game3";
import Game4 from "./Components/Game4/Game4";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/PasswordGame" element={<Game1 />} />
                <Route path="/PuzzleSlidingGame" element={<Game2 />} />
                <Route path="/TypingSpeedGame" element={<Game3 />} />
                <Route path="/MemoryCardGame" element={<Game4 />} />
            </Routes>
        </>
    );
}
export default App;