import React from 'react';
import '../Game2/Game2.css';

const Winner = ({ numbers }) => {
    const isWinner = numbers.every(n => n.value === n.index + 1);
    if (!isWinner) return null;

    return (
        <div className='Winner'>
            <p className='WIN'>You Win!</p>
        </div>
    );
};
export default Winner;