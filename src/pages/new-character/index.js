import { useState } from "react";
import { statMod, profBonus } from "../../components/functions";
import "./index.css"

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
    proficiencyBonus: 2,
    saveThrows: {
      str: {
        val: 0,
        isProf: false
      },
      dex: {
        val: 0,
        isProf: false
      },
      con: {
        val: 0,
        isProf: false
      },
      int: {
        val: 0,
        isProf: false
      },
      wis: {
        val: 0,
        isProf: false
      },
      cha: {
        val: 0,
        isProf: false
      }
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
  const [modifiers, setModifiers] = useState({
    str: -5,
    dex: -5,
    con: -5,
    int: -5,
    wis: -5,
    cha: -5,
  })

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "name") {
      setChar({ ...newChar, name: inputValue });
    } else if (inputName === "class") {
      setChar({ ...newChar, class: inputValue });
    } else if (inputName === "level") {
      setChar({ ...newChar, level: inputValue, proficiencyBonus: profBonus(inputValue) });
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
      setModifiers((prevState) => (
        {
          ...prevState,
          str: statMod(inputValue)
        }));
    } else if (inputName === "dex") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          dex: inputValue,
        },
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          str: statMod(inputValue)
        }));
    } else if (inputName === "con") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          con: inputValue,
        },
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          str: statMod(inputValue)
        }));
    } else if (inputName === "int") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          int: inputValue,
        },
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          str: statMod(inputValue)
        }));
    } else if (inputName === "wis") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          wis: inputValue,
        },
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          str: statMod(inputValue)
        }));
    } else if (inputName === "cha") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          cha: inputValue,
        },
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          str: statMod(inputValue)
        }));
    }
  }

  function handleProfs(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if(inputName == "str"){
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          str: {
            ...prevState.saveThrows.str,
            isProf: inputValue
          }
        }
      }))
      console.log(newChar.saveThrows.str.isProf)
    }
  }

  return (
    <>
      <div>
        <form>
          <div id="basic-info">
            <div className="info-tile">
              <input type="text" name="name" placeholder="Character Name" onChange={handleChange} />
              <p>Character Name</p>
            </div>
            <div className="info-tile">
              <input type="text" name="class" placeholder="Class?" onChange={handleChange} />
              <p>Class</p>

            </div>
            <div className="info-tile">
              <input type="number" name="level" placeholder="Level?" onChange={handleChange} />
              <p>Level</p>
            </div>
            <div className="info-tile">
              <input type="text" name="background" placeholder="Background?" onChange={handleChange} />
              <p>Background</p>
            </div>
            <div className="info-tile">
              <input type="text" name="player" placeholder="Player Name?" onChange={handleChange} />
              <p>Player Name</p>
            </div>
            <div className="info-tile">
              <input type="text" name="race" placeholder="Race?" onChange={handleChange} />
              <p>Race</p>
            </div>
            <div className="info-tile">
              <input type="text" name="alignment" placeholder="Alignment?" onChange={handleChange} />
              <p>Alignment</p>
            </div>
            <div className="info-tile">
              {/* Intentionally left blank */}
            </div>

          </div>
          <div id="details">
            <div id="stat-block" className="sheet-column">
              <div id="stats-and-skills">
                <div id="stats">
                  <div className="stat-tile">
                    <input type="number" name="str" onChange={handleChange} />
                    <p>{`${modifiers.str}`}</p>
                    <p>Strength</p>
                  </div>
                  <div className="stat-tile">
                    <input type="number" name="dex" onChange={handleChange} />
                    <p>{`${modifiers.dex}`}</p>

                    <p>Dexterity</p>
                  </div>
                  <div className="stat-tile">
                    <input type="number" name="con" onChange={handleChange} />
                    <p>{`${modifiers.con}`}</p>

                    <p>Constitution</p>
                  </div>
                  <div className="stat-tile">
                    <input type="number" name="int" onChange={handleChange} />
                    <p>{`${modifiers.int}`}</p>

                    <p>Intelligence</p>
                  </div>
                  <div className="stat-tile">
                    <input type="number" name="wis" onChange={handleChange} />
                    <p>{`${modifiers.wis}`}</p>

                    <p>Wisdom</p>
                  </div>
                  <div className="stat-tile">
                    <input type="number" name="cha" onChange={handleChange} />
                    <p>{`${modifiers.cha}`}</p>

                    <p>Charisma</p>
                  </div>
                </div>
                <div id="skills">
                  <div id="proficiency-bonus">
                    <span>
                      {`${newChar.proficiencyBonus}`}
                    </span>
                    <span>
                      Proficiency Bonus
                    </span>
                  </div>
                  <div id="save-throws">
                    <div className="throw-tile">
                      <input type="checkbox" name="str" onClick={handleProfs} ></input>
                      <span>{`${newChar.saveThrows.str.val}`} Strength</span>
                    </div>
                    <div className="throw-tile">
                      <input type="checkbox" name="dex"></input>
                      <span>{`${newChar.saveThrows.dex.val}`} Dexterity</span>
                    </div>
                    <div className="throw-tile">
                      <input type="checkbox" name="con"></input>
                      <span>{`${newChar.saveThrows.con.val}`} Constitution</span>
                    </div>
                    <div className="throw-tile">
                      <input type="checkbox" name="int"></input>
                      <span>{`${newChar.saveThrows.int.val}`} Intelligence</span>
                    </div>
                    <div className="throw-tile">
                      <input type="checkbox" name="wis"></input>
                      <span>{`${newChar.saveThrows.wis.val}`} Wisdom</span>
                    </div>
                    <div className="throw-tile">
                      <input type="checkbox" name="cha"></input>
                      <span>{`${newChar.saveThrows.cha.val}`} Charisma</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="other-profs">

              </div>
            </div>
            <div className="sheet-column" id="status-block">Status Block</div>
            <div className="sheet-column" id="trait-block">Trait Block</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCharacter;
