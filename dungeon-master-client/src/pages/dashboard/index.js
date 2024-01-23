import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/character-card";
import Sidebar from "../../components/sidebar";
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
        <Sidebar characters = {characters} />
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
