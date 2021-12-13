import React, { useState } from 'react'
import Card from './components/Card'
import './App.css'
import heartbreak from './jpg/heartbreak.jpg'
import collegeDropout from './jpg/collegeDropout.jpeg'
import lateRegistration from './jpg/lateRegistration.jpg'
import myBeautiful from './jpg/myBeautiful.jpg'
import yeezus from './jpg/yeezus.jpg'

function App() {
  const [cards, setCards] = useState(
    [
      {
          id: 0, 
          imgUrl: heartbreak,
          isFlipped: false, 
      },
      {
          id: 1, 
          imgUrl: collegeDropout,
          isFlipped: false, 
      },
      {
          id: 2, 
          imgUrl: lateRegistration,
          isFlipped: false, 
      },
      {
          id: 3, 
          imgUrl: myBeautiful,
          isFlipped: false, 
      },
      {
          id: 4, 
          imgUrl: yeezus,
          isFlipped: false, 
      },
      {
          id: 5, 
          imgUrl: heartbreak,
          isFlipped: false, 
      },
      {
          id: 6, 
          imgUrl: collegeDropout,
          isFlipped: false, 
      },
      {
          id: 7, 
          imgUrl: lateRegistration,
          isFlipped: false, 
      },
      {
          id: 8, 
          imgUrl: myBeautiful,
          isFlipped: false, 
      },
      {
          id: 9, 
          imgUrl: yeezus,
          isFlipped: false, 
      },
    ]
  )

  const shuffleCards = () => {
    let currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    setCards([...cards]);
    console.log(cards);
  }

  const handleClick = (e) => {
    const index = e.currentTarget.id;
    let cardsCopy = [...cards];
    cardsCopy[index].isFlipped = true; 
    setCards(cardsCopy);
    console.log(cards)
  }

  return (
    <div className="App">
      <h1>Matching Game</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <Card cards={cards} onClick={handleClick} />
    </div>
  );
}

export default App;
