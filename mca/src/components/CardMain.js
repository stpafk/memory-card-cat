import Cats from "../views/Cats";
import { useState } from "react";
import Card from "../views/Card";
import uuid from 'react-uuid'

function CardMain({score, highScore, setScore, setHighScore}) {

    const [catCards, setCards] = useState(Cats);

    function reset() {
        alert("game was reseted" )
        setCards(
            catCards.map((cat) => {
                cat.clicked = false;
                return cat;
            })
        );
    };

    function randomize() {
        return;
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
        if (clickedCard.clicked) {
            handleScore("clicked");
            reset();
            return;
        };

        clickedCard.clicked = true;
        handleScore("not clicked")
        
        setCards(catCards.map((card) => {
            if (card.id === clickedCard.id) {
                return clickedCard;
            }

            return card;
        }))
    };

    return(
        <div className="main card">
            <Card catCards={catCards} handleClick={handleClick}/>
        </div>
    )

}

export default CardMain;