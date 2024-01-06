import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/character-card";
import "./index.css"

const Dashboard = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/character`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(...characters, data.data);
        console.log(characters)
      });
  }, []);

  return (
    <div id="dashboard">
      <div id="sidebar">
        <p>User Name</p>
        <p>Characters</p>
        <ul>
          {characters.map((char) => {
            return (
              <li>{`${char.name}`}</li>
            )
          })}
        </ul>
        <button onClick={() => navigate("/new_character")}>
          Make new character
        </button>
        <button onClick={() => navigate("/encounter", {state: {characters}})}>
          {/* Not terribly fussed with it right now but can add a state into the arguments with navigate to use props */}
          Encounter
        </button>
        <p>Party View</p>
      </div>
      <div id="party">
        <ul className="characterCards">
          {characters.map((char) => {
            return (
              <li>
                <CharacterCard character={char} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
