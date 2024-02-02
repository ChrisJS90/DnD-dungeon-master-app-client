import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Modal from 'react-modal'
import Sidebar from "../../components/sidebar";
import CombatCard from "../../components/combat-card";
import EnemyCard from "../../components/enemy-card";
import "./index.css"


const Encounter = () => {
    const location = useLocation();
    const inCharacters = location.state;
    const [characters, setCharacters] = useState(inCharacters.characters);

    const blankEnemy = {
        name: '',
        ac: 0,
        hp: 1,
        speed: 30,
        vulnerabilities: '',
        resistances: '',
        special: [],
        actions: []
    }
    const [newEnemy, setNewEnemy] = useState({
        name: '',
        ac: 0,
        hp: 1,
        speed: 30,
        vulnerabilities: '',
        resistances: '',
        special: [],
        actions: []
    })

    const [newSpecial, setNewSpecial] = useState()
    const [newAction, setNewAction] = useState()



    const [enemies, setEnemies] = useState([]);
    const [entities, setEntities] = useState(inCharacters.characters);
    const [modalIsOpen, setIsOpen] = useState(false)
    const [initiativeModalOpen, setInitiativeModal] = useState(false)
    const [isInitiative, setIsInitiative] = useState(false)

    function checkInitiative() {
        if (isInitiative === false) {
            return (
                <div>
                    <p id="initiative-warning">Set initiative for all entities!!!</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>All entities have initiative set</p>
                </div>
            )
        }
    }
    console.log(entities)

    // Logic to set initiative
    //      Assign initiative to every entity
    //      New array with all entities ordered by initiative (high->low)
    //      

    function sortOrder() {
        if (isInitiative === false) {
            characters.map((char) => {
                setEntities([...entities, char])
            })
            enemies.map((enemy) => {
                setEntities([...entities, enemy])
            })
        }
    }



    // Modal functions

    // Enemy Modal
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setNewEnemy(blankEnemy)
        setIsOpen(false)
    }

    function handleChange(e) {
        const inputName = e.target.name
        const inputValue = e.target.value

        if (inputName === 'name') {
            setNewEnemy({ ...newEnemy, name: inputValue })
        } else if (inputName === 'ac') {
            setNewEnemy({ ...newEnemy, ac: inputValue })
        } else if (inputName === 'hp') {
            setNewEnemy({ ...newEnemy, hp: inputValue })
        } else if (inputName === 'speed') {
            setNewEnemy({ ...newEnemy, speed: inputValue })
        } else if (inputName === 'vulnerabilities') {
            setNewEnemy({ ...newEnemy, vulnerabilities: inputValue })
        } else if (inputName === 'resistances') {
            setNewEnemy({ ...newEnemy, resistances: inputValue })
        } else if (inputName === 'special') {
            setNewSpecial(inputValue)
        } else if (inputName === 'actions') {
            setNewAction(inputValue)
        }

    }

    function handleAdd(e) {
        e.preventDefault()
        const inputName = e.target.name
        if (inputName === "addSpecial") {
            console.log('newEnemy was:', newEnemy)
            console.log('newSpecial is:', newSpecial)
            setNewEnemy({ ...newEnemy, special: [...newEnemy.special, newSpecial] })
            console.log('newEnemy is:', newEnemy)
            setNewSpecial('')
        } else if (inputName === 'addAction') {
            setNewEnemy({ ...newEnemy, actions: [...newEnemy.actions, newAction] })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (e.target.name === "enemyForm") {
            setEnemies([...enemies, newEnemy])
            setEntities([...entities, newEnemy])
            closeModal()
        }
    }

    // Initiative Modal

    function openInitiativeModal() {
        setInitiativeModal(true)
    }

    function closeInitiativeModal() {
        setInitiativeModal(false)
    }

    // End Modal Functions




    return (
        <div id="main">
            <div id="sidebar">
                <Sidebar characters={characters} />
            </div>
            <div id="main-body">
                <div id="topbar">
                    <span>
                        <button onClick={openModal}>Add Enemy</button>
                        <Modal isOpen={modalIsOpen}>
                            <form onSubmit={handleSubmit} name="enemyForm">
                                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                                <input type="number" name="ac" placeholder="AC" onChange={handleChange} />
                                <input type="number" name="hp" placeholder="HP" onChange={handleChange} />
                                <input type="number" name="speed" placeholder="speed" onChange={handleChange} />
                                <input type="text" name="vulnerabilities" placeholder="vulnerabilities" onChange={handleChange} />
                                <input type="text" name="resistances" placeholder="resistances" onChange={handleChange} />
                                <input type="text" name="special" placeholder="special" onChange={handleChange} />
                                <button name="addSpecial" onClick={handleAdd}> Add Special </button>
                                <ul>
                                    {newEnemy.special.map((item) => {
                                        return (
                                            <li>{`${item}`}</li>
                                        )
                                    })}
                                </ul>
                                <input type="text" name="actions" placeholder="actions" onChange={handleChange} />
                                <button name="addAction" onClick={handleAdd}>Add Action</button>
                                <ul>
                                    {newEnemy.actions.map((item) => {
                                        return (
                                            <li>{`${item}`}</li>
                                        )
                                    })}
                                </ul>
                                <input type="submit" value="Submit" />
                            </form>
                            <button onClick={closeModal}>Cancel</button>
                        </Modal>
                        <button onClick={openInitiativeModal}>Set Initiative</button>
                        <Modal isOpen={initiativeModalOpen}>
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    {entities.map((ent) => {
                                        return (
                                            <li>
                                                <span>
                                                    <p>
                                                    {`${ent.name}`}
                                                    </p>
                                                    <input type="number" name="initiative"  />
                                                </span>
                                            </li>)
                                    })}
                                </ul>
                                <button onClick={closeInitiativeModal}>Cancel</button>
                            </form>
                        </Modal>
                    </span>

                </div>
                <div>
                    <ul>
                        {/* list in initiative order */}
                        {entities.map((ent) => {
                            if (ent.hasOwnProperty(`class`)) {
                                return (
                                    <li>
                                        <CombatCard character={ent} />
                                    </li>
                                )
                            } else {
                                return (
                                    <li>
                                        <EnemyCard enemy={ent} />
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )


}

export default Encounter