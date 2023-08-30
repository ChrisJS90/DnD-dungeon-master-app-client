import { useState } from "react";

const NewCharacter = () => {
  const emptyChar = {
    basicInfo: {
      name: "",
      class: "",
      level: 1,
      background: "",
      playerName: "",
      race: "",
      alignment: "",
    },
    stats: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    },
    skills: {
      acrobatics: 0,
      animHand: 0,
      arcane: 0,
      athl: 0,
      decep: 0,
      hist: 0,
      insight: 0,
      intimid: 0,
      invest: 0,
      med: 0,
      nature: 0,
      percep: 0,
      perf: 0,
      pers: 0,
      religion: 0,
      sOfH: 0,
      stealth: 0,
      surv: 0,
    },
    combat: {
      hpMax: 0,
      ac: 0,
      speed: 0,
      hitDice: "",
    },
    personality: {
      traits: "",
      ideals: "",
      bonds: "",
      flaws: "",
    },
    features: [],
    proficiencies: [],
  };

  const [newChar, setChar] = useState(emptyChar);

  return (
    <>
      <div>
        <form>
          <div id="basic-info">
            <input type="text" name="name" placeholder="Character Name" />
            <input type="text" name="class" placeholder="Class?" />
            <input type="text" name="level" placeholder="Level?" />
            <input type="text" name="background" placeholder="Background?" />
            <input type="text" name="playerName" placeholder="Player Name?" />
            <input type="text" name="race" placeholder="Race?" />
            <input type="text" name="alignment" placeholder="Alignment?" />
          </div>

          <div id="stats">
            <label>
                Strength
              <input type="number" name="str" />
            </label>
            <label>
                Dexterity
              <input type="number" name="dex" />
            </label>
            <label>
                Constitution
              <input type="number" name="con" />
            </label>
            <label>
                Intelligence
              <input type="number" name="int" />
            </label>
            <label>
                Wisdom
              <input type="number" name="wis" />
            </label>
            <label>
                Charisma
              <input type="number" name="cha" />
            </label>
          </div>

          <div id="skills">

          </div>


        </form>
      </div>
    </>
  );
};

export default NewCharacter;
