import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div id="character-card">
      <div className="image-container">
        <img src={character.image} alt="" />
      </div>
      <p className="name">{character.name}</p>
      <p className="title">{character.title}</p>

      <p style={{ fontSize: 18 }}>ABILITIES</p>
      <div className="abilites">
        {character.abilities.map((ability, i) => (
          <p key={i} className="ability">
            {ability}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CharacterCard;
