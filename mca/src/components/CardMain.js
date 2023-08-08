import Cats from "../views/Cats";
import { useState } from "react";
import Card from "../views/Card";

function CardMain() {

    const [catCards, setCards] = useState(Cats);

    function randomize() {
        return;
    }

    function handleClick() {
        return;
    }

    return(
        <div className="main card">
            <Card catCards={catCards} handleClick={handleClick}/>
        </div>
    )

}

export default CardMain;