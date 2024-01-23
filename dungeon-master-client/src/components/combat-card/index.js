import { useState } from "react";
import "./index.css"

const CombatCard = ({ character }) => {
  const [char, setChar] = useState(character);
  const [hp, setHp] = useState(char.combat.hpMax);

  function handleHp(e) {
    let newHp = hp;

    if (e.target.name === "decrementHp") {
      newHp--;
      if (newHp >= 0) {
        setHp(newHp);
      } else {
        setHp(0);
      }
    } else {
      newHp++;
      if (newHp <= char.combat.hpMax) {
        setHp(newHp);
      } else {
        setHp(char.combat.hpMax);
      }
    }
  }

  return (
    <div id="card">
      <div id="basic">
        <p>{`${char.name}`}</p>
        <p>{`${char.class}`}</p>
        <p>{`Level: ${char.level}`}</p>
      </div>
      <div id="health">
        <p>{`HP Max: ${char.combat.hpMax}`}</p>
        <span>
          <p>{`Current HP: ${hp}`}</p>
          <button name="decrementHp" onClick={handleHp}>
            {" "}
            -{" "}
          </button>
          <button name="incrementHp" onClick={handleHp}>
            {" "}
            +{" "}
          </button>
        </span>
      </div>
      <div id="combat">
        <p>{`AC: ${char.combat.ac}`}</p>
        <p>{`Speed: ${char.combat.speed}`}</p>
        <p>{`Initiative: `}</p>
      </div>


    </div>
  )
};

export default CombatCard
