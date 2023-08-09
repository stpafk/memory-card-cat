import { useState, useEffect } from 'react';
import Header from './components/Header';
import CardMain from './components/CardMain';
import Footer from './components/Footer';
import "./style.css"

export default function App() {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        if (score >= highScore) {
            setHighScore(score);
        }
    }, [score, highScore, setScore])

    return(
        <>
        <header className="mc header">
            <Header score={score} highScore={highScore}/>
        </header>
        <div className="mc main">
            <CardMain  score={score} 
            highScore={highScore}  
            setScore={setScore}
            setHighScore={setHighScore}/>
        </div>
        <footer>
            <Footer />
        </footer>
        </>
    )

}