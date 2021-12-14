import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Message from './components/Message'
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
  );
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [end, setEnd] = useState(false); 
  const [start, setStart] = useState(false);

  useEffect(() => {
    const noMatch = () => {
      let cardsCopy = [...cards];
      cardsCopy.forEach(card => {
        card.isFlipped = false; 
      }); 
      setCards(cardsCopy);
    }

    const incrementMoves = () => {
      setMoves(prevMoves => prevMoves + 1);
    }

    if (flippedCards.length === 2) {
      if (flippedCards[0].imgUrl !== flippedCards[1].imgUrl) {
        setTimeout(() => {
          noMatch(); 
        }, 2000);
        incrementMoves();
        setFlippedCards([]);
      } else {
        console.log('match');
        incrementMoves(); 
        setFlippedCards([]);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    const endGame = () => {
      if (moves > 8 && moves < 12) {
        console.log('nice job bro');
      }
      else if (moves > 13) {
        console.log('you fucking suck');
      }
      else {
        console.log('you are a god, french ass restaraunt');
      }
      setEnd(true); 
    }
    if (cards.every(card => { return card.isFlipped === true })) endGame();
  }, [cards, moves]);

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
  }

  const startGame = () => {
    setStart(true);
    shuffleCards();
    let cardsCopy = [...cards];
    cardsCopy.forEach(card => {card.isFlipped = false});
    setCards(cardsCopy); 
    setMoves(0); 
    setEnd(false); 
  }

  const handleClick = (e) => {
    const index = e.currentTarget.id;
    let cardsCopy = [...cards];
    cardsCopy[index].isFlipped = true; 
    setCards(cardsCopy);
    setFlippedCards(flippedCards => [...flippedCards, cardsCopy[index]]);
  }

  return (
    <div className="App">
      <h1>Matching Game</h1>
      <h2>{moves}</h2>
      <button onClick={startGame}>Start Game</button>
      {start && <Card cards={cards} onClick={handleClick} />}
      {end && <Message moves={moves} startGame={startGame} />}
    </div>
  );
}

export default App;
