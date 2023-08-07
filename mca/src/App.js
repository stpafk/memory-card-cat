import { useState } from 'react'
import Header from './components/Header'
import CardHandler from './components/CardMain'

export default function App() {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return(
        <>
        <div className="mc header">
            <h1 className='mc title'>Memory Cat</h1>
            <p className='mc subtitle'>A memory card based on cats!</p>
            <Header score={score} highScore={highScore}/>
        </div>
        <div className="mc main">
            <CardMain score={score} highScore={highScore}/>
        </div>
        </>
    )

}