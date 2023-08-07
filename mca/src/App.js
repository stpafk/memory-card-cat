import { useState } from 'react'
import Header from './components/Header'
import CardHandler from './components/CardHandler'

export default function App() {

    const [score, setScore] = useState(0);
    const [cards, setCards] = useState(Array(10).fill(false));

    const handleClick = (cardIdx) => {
        if (!cards[cardIdx]) {
            const newCards = [...cards];
            newCards[cardIdx] = true;
            setCards(newCards);
            setScore(score + 1);
        }

        setScore(0);
    }


    return(
        <>
        <div className="mc header">
            <h1 className='mc title'>Memory Cat</h1>
            <p className='mc subtitle'>A memory card based on cats!</p>
            <Header score={score}/>
        </div>
        <div className="mc main">
            <CardHandler handleClick={handleClick}/>
        </div>
        </>
    )

}