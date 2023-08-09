//import { useState, useEffect } from 'react'

function Header({score, highScore}) {

    return(
        <>
        <div className="c title">
            <h1 className='mc title'>Memory Cat</h1>
            <p className='mc subtitle'>A Memory Card game based on cats!</p>
        </div>
        <div className='r display score'>
            <h3 className="r score">Score</h3>
            <p className='curr score'>Current Score: {score}</p>
            <p className="high score">Highest Score: {highScore} </p>
        </div>
        </>
    )

}

export default Header;