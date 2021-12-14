import React from 'react';

export default function Message({ moves, startGame }) {
    return (
        <div className='congratulation-modal'>
            <h2>Game Over</h2>
            <span>you have made {moves}</span>
            <button onClick={startGame}>restart</button>
        </div>
    )
}