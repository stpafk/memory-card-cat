//import { useState, useEffect } from 'react'
import "../styles/style.css"

function Header(score, highScore) {

    return(
        <div className='r display-score'>
            <p className='curr score'>Current score: {score}</p>
            <p className="high score">Highest score: {highScore} </p>
        </div>
    )

}

export default Header;