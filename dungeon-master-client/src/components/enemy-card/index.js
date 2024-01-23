import { useState } from "react";

const EnemyCard = ({ enemy }) => {
    const [ene, setEne] = useState(enemy)
    const [hp, setHp] = useState(ene.hp)


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
            if (newHp <= ene.hpMax) {
                setHp(newHp);
            } else {
                setHp(ene.hpMax);
            }
        }
    }

    return (
        <div id="card">
          <div id="basic">
            <p>{`${ene.name}`}</p>
            <p>{`${ene.vulnerabilities}`}</p>
            <p>{`${ene.resistances}`}</p>

          </div>
          <div id="health">
            <p>{`HP Max: ${ene.hp}`}</p>
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
            <p>{`AC: ${ene.ac}`}</p>
            <p>{`Speed: ${ene.speed}`}</p>
            <p>{`Initiative: `}</p>
          </div>
          <div id="special">
            <ul>
                {ene.special.map((item) => {
                    return (
                        <li>{`${item}`}</li>
                    )
                })}
            </ul>
            <ul>
                {ene.actions.map((item) => {
                    return (
                        <li>{`${item}`}</li>
                    )
                })}
            </ul>
          </div>
    
    
        </div>
    )
}

export default EnemyCard