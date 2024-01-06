import { useState } from "react";

const NewCharacter = () => {
  const emptyChar = {
    name: "",
    class: "",
    level: 1,
    background: "",
    playerName: "",
    race: "",
    alignment: "",
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
    // personality: {
    //   traits: "",
    //   ideals: "",
    //   bonds: "",
    //   flaws: "",
    // },
    // features: [],
    // proficiencies: [],
  };

  const [newChar, setChar] = useState(emptyChar);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "name") {
      setChar({ ...newChar, name: inputValue });
    } else if (inputName === "class") {
      setChar({ ...newChar, class: inputValue });
    } else if (inputName === "level") {
      setChar({ ...newChar, level: inputValue });
    } else if (inputName === "background") {
      setChar({ ...newChar, background: inputValue });
    } else if (inputName === "player") {
      setChar({ ...newChar, player: inputValue });
    } else if (inputName === "race") {
      setChar({ ...newChar, race: inputValue });
    } else if (inputName === "alignment") {
      setChar({ ...newChar, alignment: inputValue });
    } else if (inputName === "str") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          str: inputValue,
        },
      }));
    } else if (inputName === "dex") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          dex: inputValue,
        },
      }));
    } else if (inputName === "con") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          con: inputValue,
        },
      }));
    } else if (inputName === "int") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          int: inputValue,
        },
      }));
    } else if (inputName === "wis") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          wis: inputValue,
        },
      }));
    } else if (inputName === "cha") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          cha: inputValue,
        },
      }));
    }
  }

  return (
    <>
      <div>
        <form>
          <div id="basic-info">
            <input type="text" name="name" placeholder="Character Name" onChange={handleChange}/>
            <input type="text" name="class" placeholder="Class?" onChange={handleChange}/>
            <input type="text" name="level" placeholder="Level?" onChange={handleChange}/>
            <input type="text" name="background" placeholder="Background?" onChange={handleChange}/>
            <input type="text" name="player" placeholder="Player Name?" onChange={handleChange}/>
            <input type="text" name="race" placeholder="Race?" onChange={handleChange}/>
            <input type="text" name="alignment" placeholder="Alignment?" onChange={handleChange}/>
          </div>

          <div id="stats">
            <label>
              Strength
              <input type="number" name="str" onChange={handleChange}/>
            </label>
            <label>
              Dexterity
              <input type="number" name="dex" onChange={handleChange}/>
            </label>
            <label>
              Constitution
              <input type="number" name="con" onChange={handleChange}/>
            </label>
            <label>
              Intelligence
              <input type="number" name="int" onChange={handleChange}/>
            </label>
            <label>
              Wisdom
              <input type="number" name="wis" onChange={handleChange}/>
            </label>
            <label>
              Charisma
              <input type="number" name="cha" onChange={handleChange}/>
            </label>
          </div>

          <div id="skills"></div>
        </form>
      </div>
    </>
  );
};

export default NewCharacter;
