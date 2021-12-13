import React from 'react'
import './Card.css' 
import cardBack from '../jpg/cardBack.jpg'

export default function Card({ cards, onClick }) {
    return (
        <div className="cards-container">
            {cards.map((card, index) => {
                return (
                    <div className="flip-card" id={index} key={index} onClick={onClick}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={card.imgUrl} alt="" style={stylingObject.cardFront}/>
                            </div>
                            <div className="flip-card-back">
                                <img src={cardBack} alt="Playing card pattern" style={stylingObject.cardBack}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

const stylingObject = {
    cardBack: {
        width: 100 + '%',
        height: 100 + '%',
    },
    cardFront: {
        width: 140,
        height: 140,
    }
}

// .flip-card:hover .flip-card-inner {
//     transform: rotateY(180deg);
// }