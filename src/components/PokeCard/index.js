import React from "react";

const PokeCard = ({ name, imageUrl, type }) => {
    return (
        <div className="pokemon-card">
            <h2>{name}</h2>
            <img src={imageUrl} alt={name}/>
            <p>Type: {type}</p>
        </div>
    );
};

export default PokeCard;