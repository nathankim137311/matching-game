import React from 'react';

export default function Message({ startGame }) {
    return (
        <div>
            <h2>Game Over</h2>
            <button onClick={startGame}>restart</button>
        </div>
    )
}