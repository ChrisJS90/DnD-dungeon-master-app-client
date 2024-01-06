import { useLocation } from "react-router-dom"
import { useState } from "react"


const Encounter = () => {
    const location = useLocation();
    const inCharacters = location.state;

    const [characters, setCharacters] = useState(inCharacters);
    const [enemies, setEnemies] = useState([]);

    // Logic to set initiative
    //      Assign initiative to every entity
    //      New array with all entities ordered by initiative (high->low)
    //      

    return (
        <div>
            <ul>
                {/* list in initiative order */}
            </ul>
        </div>
    )


} 

export default Encounter