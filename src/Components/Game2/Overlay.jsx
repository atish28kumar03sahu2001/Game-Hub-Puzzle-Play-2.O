import React from "react";
import '../Game2/Game2.css';
const Overlay = () => {
    return (
        <>
            {new Array(16).fill().map((_, i) => (
                <div key={i} className="overlay" />
            ))}
        </>
    );
}
export default Overlay;