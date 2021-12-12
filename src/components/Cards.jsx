import React from 'react'

export default function Cards({ cards, onClick }) {
    return (
        <div className='cards-container'>
            {cards.map((card, index) => {
                return (
                    <div id={index} key={index} onClick={onClick}>
                        <img style={stylingObject} src={card.imgUrl} alt="" />
                    </div>
                )
            })}
        </div>
    ) 
}

const stylingObject = {
    height: 100,
    width: 100,
}

