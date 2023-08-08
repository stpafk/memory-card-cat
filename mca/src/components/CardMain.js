import Cats from "../views/Cats";
import { useState } from "react";
import Card from "../views/Card";
//import uuid from 'react-uuid'

function CardMain({score, highScore, setScore, setHighScore}) {

    const [catCards, setCards] = useState(Cats);

    function reset() {
        
        setCards(
            catCards.map((cat) => {
                cat.clicked = false;
                return cat;
            })
        );
    };

    const randomize = () => {
        
        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * ( i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr
        }

        const shuffleCards = shuffle(catCards);
        setCards(shuffleCards);

    };

    function handleScore(action) {

        if (action === "clicked") {
            setScore(-1);
        }

        setScore((score) => score + 1);
        if (score >= highScore) {
            setHighScore(score);
        } 
    }

    function handleClick(id) {
        let clickedCard = catCards.filter((cat) => cat.id === id)[0];
        randomize();
        if (clickedCard.clicked) {
            handleScore("clicked");
            reset();
            return;
        };

        clickedCard.clicked = true;
        handleScore("not clicked");
        
    };

    return(
        <div className="main card">
            <Card catCards={catCards} handleClick={handleClick}/>
        </div>
    )

}

export default CardMain;