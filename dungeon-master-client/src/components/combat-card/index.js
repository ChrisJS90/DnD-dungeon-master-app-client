import { useState } from "react";

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
    <div>
        <p>{`${char.name}`}</p>
        <p>{`${char.class}`}</p>
        <p>{`${char.level}`}</p>
        <p>{`${char.combat.ac}`}</p>
        <p>{`${char.combat.speed}`}</p>

    </div>
  )
};

export default CombatCard
