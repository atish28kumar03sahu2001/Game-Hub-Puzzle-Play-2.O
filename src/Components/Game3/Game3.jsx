import React from 'react';
import '../Game3/Game3.css';
import Typing from './Typing';
const Game3 = () => {
    return(
        <>
            <div className='G3HD'><h1 className='G3H1'>Typing Speed Test</h1></div>
            <div className='typing'>
                <Typing />
            </div>
        </>
    );
}
export default Game3;