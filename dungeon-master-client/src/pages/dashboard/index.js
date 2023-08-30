import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/character-card";
import "./index.css"

const Dashboard = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/characters`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(...characters, data);
      });
  }, []);

  return (
    <div id="dashboard">
      <div id="sidebar">
        <p>User Name</p>
        <p>Characters</p>
        {/* needs to be a list */}
        <button onClick={() => navigate("/new_character")}>
          Make new character
        </button>
        <p>Party View</p>
      </div>
      <div id="party">
        <ul>
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
