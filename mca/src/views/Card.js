
function Card({catCards, handleClick}) {

    return(
        <>{catCards.map((card) => (
            <div className="grid card"
            onClick={() => handleClick(card.id)}
            key={card.id}
            >
                <img className="cat c-img" src={card.src} alt={card.name}></img>
                <h3 className="cat title">{card.name}</h3>

            </div>
        ))}</>
    )

}

export default Card;