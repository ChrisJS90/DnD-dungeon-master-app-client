import { useState } from "react";
import { statMod, profBonus, profCalc } from "../../components/functions";
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
      acrobatics: {
        val: 0,
        isProf: false
      },
      animHand: {
        val: 0,
        isProf: false
      },
      arcana: {
        val: 0,
        isProf: false
      },
      athl: {
        val: 0,
        isProf: false
      },
      decep: {
        val: 0,
        isProf: false
      },
      hist: {
        val: 0,
        isProf: false
      },
      insight: {
        val: 0,
        isProf: false
      },
      intimid: {
        val: 0,
        isProf: false
      },
      invest: {
        val: 0,
        isProf: false
      },
      med: {
        val: 0,
        isProf: false
      },
      nature: {
        val: 0,
        isProf: false
      },
      percep: {
        val: 0,
        isProf: false
      },
      perf: {
        val: 0,
        isProf: false
      },
      pers: {
        val: 0,
        isProf: false
      },
      religion: {
        val: 0,
        isProf: false
      },
      sOfH: {
        val: 0,
        isProf: false
      },
      stealth: {
        val: 0,
        isProf: false
      },
      surv: {
        val: 0,
        isProf: false
      },
    },
    combat: {
      hpMax: 0,
      ac: 0,
      speed: 0,
      hitDice: "",
    },
    otherProfs: ["common"]
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
        saveThrows: {
          ...prevState.saveThrows,
          str: {
            ...prevState.saveThrows.str,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.saveThrows.str.isProf)
          }
        },
        skills: {
          ...prevState.skills,
          athl: {
            ...prevState.skills.athl,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.athl.isProf)
          }
        }
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
        saveThrows: {
          ...prevState.saveThrows,
          dex: {
            ...prevState.saveThrows.dex,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.saveThrows.dex.isProf)
          }
        },
        skills: {
          ...prevState.skills,
          acrobatics: {
            ...prevState.skills.acrobatics,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.acrobatics.isProf)
          },
          sOfH: {
            ...prevState.skills.sOfH,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.sOfH.isProf)
          },
          stealth: {
            ...prevState.skills.stealth,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.stealth.isProf)
          }
        }
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          dex: statMod(inputValue)
        }));
    } else if (inputName === "con") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          con: inputValue,
        },
        saveThrows: {
          ...prevState.saveThrows,
          con: {
            ...prevState.saveThrows.con,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.saveThrows.con.isProf)
          }
        },
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          con: statMod(inputValue)
        }));
    } else if (inputName === "int") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          int: inputValue,
        },
        saveThrows: {
          ...prevState.saveThrows,
          int: {
            ...prevState.saveThrows.int,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.saveThrows.int.isProf)
          }
        },
        skills: {
          ...prevState.skills,
          arcana: {
            ...prevState.skills.arcana,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.arcana.isProf)
          },
          hist: {
            ...prevState.skills.hist,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.hist.isProf)
          },
          invest: {
            ...prevState.skills.hist,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.invest.isProf)
          },
          nature: {
            ...prevState.skills.nature,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.nature.isProf)
          },
          religion: {
            ...prevState.skills.religion,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.religion.isProf)
          }
        }
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          int: statMod(inputValue)
        }));
    } else if (inputName === "wis") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          wis: inputValue,
        },
        saveThrows: {
          ...prevState.saveThrows,
          wis: {
            ...prevState.saveThrows.wis,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.saveThrows.wis.isProf)
          }
        },
        skills: {
          ...prevState.skills,
          animHand: {
            ...prevState.skills.animHand,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.animHand.isProf)
          },
          insight: {
            ...prevState.skills.insight,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.insight.isProf)
          },
          med: {
            ...prevState.skills.med,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.med.isProf)
          },
          percep: {
            ...prevState.skills.percep,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.percep.isProf)
          },
          surv: {
            ...prevState.skills.surv,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.surv.isProf)
          }
        }
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          wis: statMod(inputValue)
        }));
    } else if (inputName === "cha") {
      setChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          cha: inputValue,
        },
        saveThrows: {
          ...prevState.saveThrows,
          cha: {
            ...prevState.saveThrows.cha,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.saveThrows.cha.isProf)
          }
        },
        skills: {
          ...prevState.skills,
          decep: {
            ...prevState.skills.decep,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.decep.isProf)
          },
          intimid: {
            ...prevState.skills.intimid,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.intimid.isProf)
          },
          perf: {
            ...prevState.skills.perf,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.perf.isProf)
          },
          pers: {
            ...prevState.skills.pers,
            val: profCalc(newChar.proficiencyBonus, inputValue, newChar.skills.pers.isProf)
          },
        }
      }));
      setModifiers((prevState) => (
        {
          ...prevState,
          cha: statMod(inputValue)
        }));
    }
  }

  function handleProfs(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const isChecked = event.target.checked;
    console.log(event.target.checked)

    // Want to add a check for number of saving throws that is proficient as there can only be two

    if (inputName == "str") {
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          str: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.str, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "dex") {
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          dex: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.dex, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "con") {
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          wis: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.con, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "int") {
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          int: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.int, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "wis") {
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          wis: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.wis, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "cha") {
      setChar((prevState) => ({
        ...prevState,
        saveThrows: {
          ...prevState.saveThrows,
          cha: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.cha, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "acrobatics") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          acrobatics: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.dex, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "animHand") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          animHand: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.wis, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "arcana") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          arcana: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.int, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "athl") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          athl: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.str, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "decep") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          decep: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.cha, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "hist") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          hist: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.int, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "insight") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          insight: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.wis, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "intimid") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          intimid: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.cha, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "invest") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          invest: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.int, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "med") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          med: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.wis, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "nature") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          nature: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.int, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "percep") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          percep: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.wis, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "perf") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          perf: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.cha, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "pers") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          pers: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.cha, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "religion") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          religion: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.int, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "sOfH") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          sOfH: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.dex, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "stealth") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          stealth: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.dex, isChecked),
            isProf: isChecked
          }
        }
      }))
    } else if (inputName == "surv") {
      setChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          surv: {
            val: profCalc(newChar.proficiencyBonus, newChar.stats.wis, isChecked),
            isProf: isChecked
          }
        }
      }))
    }
  } 

  const [newProf, setNewProf] = useState("")

  function handleChangeNewProf(e) {
    const input = e.target.value
    setNewProf(input)
  }

  function handleNewProf(e) {
    e.preventDefault()
    if(newProf.length > 0) {
      setChar((prevState) => ({
        ...prevState,
        otherProfs: [...prevState.otherProfs, newProf]
      }))
      setNewProf("")
    }
  }

  function removeProf(e) {
    e.preventDefault();
    const newProfList = newChar.otherProfs.filter((p) => p != e.target.value)
    setChar((prevState) => ({
      ...prevState,
      otherProfs: [newProfList]
    }))
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
                    <ul>
                      <li className="throw-tile">
                        <input type="checkbox" name="str" onClick={handleProfs} ></input>
                        <span>{`${newChar.saveThrows.str.val}`} Strength</span>
                      </li>
                      <li className="throw-tile">
                        <input type="checkbox" name="dex" onClick={handleProfs}></input>
                        <span>{`${newChar.saveThrows.dex.val}`} Dexterity</span>
                      </li>
                      <li className="throw-tile">
                        <input type="checkbox" name="con" onClick={handleProfs}></input>
                        <span>{`${newChar.saveThrows.con.val}`} Constitution</span>
                      </li>
                      <li className="throw-tile">
                        <input type="checkbox" name="int" onClick={handleProfs}></input>
                        <span>{`${newChar.saveThrows.int.val}`} Intelligence</span>
                      </li>
                      <li className="throw-tile">
                        <input type="checkbox" name="wis" onClick={handleProfs}></input>
                        <span>{`${newChar.saveThrows.wis.val}`} Wisdom</span>
                      </li>
                      <li className="throw-tile">
                        <input type="checkbox" name="cha" onClick={handleProfs}></input>
                        <span>{`${newChar.saveThrows.cha.val}`} Charisma</span>
                      </li>
                    </ul>
                  </div>
                  <div id="skill-profs">
                    <ul>
                      <li className="skill-tile">
                        <input type="checkbox" name="acrobatics" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.acrobatics.val}`} Acrobatics (Dex)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="animHand" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.animHand.val}`} Animal Handling (Wis)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="arcana" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.arcana.val}`} Arcana (Int)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="athl" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.athl.val}`} Athletics (Str)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="decep" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.decep.val}`} Deception (Cha)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="hist" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.hist.val}`} History (Int)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="insight" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.insight.val}`} Insight (Wis)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="intimid" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.intimid.val}`} Intimidate (Cha)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="invest" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.invest.val}`} Investigation (Int)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="med" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.med.val}`} Medicine (Wis)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="nature" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.nature.val}`} Nature (Int)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="percep" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.percep.val}`} Perception (Wis)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="perf" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.perf.val}`} Performance (Cha)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="pers" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.pers.val}`} Persuasion (Cha)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="religion" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.religion.val}`} Religion (Int)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="sOfH" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.sOfH.val}`} Sleight of Hand (Dex)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="stealth" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.stealth.val}`} Stealth (Dex)</span>
                      </li>
                      <li className="skill-tile">
                        <input type="checkbox" name="surv" onClick={handleProfs}></input>
                        <span>{`${newChar.skills.surv.val}`} Survival (Wis)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="other-profs">
                <ul>
                  {newChar.otherProfs.map((othProf) => {
                    return (
                      <li key={othProf}>
                        {othProf}
                        <button name="remove-prof" onClick={removeProf} value={othProf}>X</button>
                      </li>
                    )
                  })}
                </ul>
                <div id="add-prof">
                  <input type="text" name="newProf" onChange={handleChangeNewProf}></input>
                  <button onClick={handleNewProf}>Add new proficiency</button>
                </div>
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
