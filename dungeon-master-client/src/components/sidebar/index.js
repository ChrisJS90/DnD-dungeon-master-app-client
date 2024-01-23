import { useNavigate } from "react-router-dom";

const Sidebar = ({ characters }) => {
  const navigate = useNavigate();

    return (
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
            <p>
                <button onClick={() => navigate("/new_character")}>
                    Make new character
                </button>
            </p>
            <p>
                <button onClick={() => navigate("/encounter", { state: { characters } })}>
                    {/* Not terribly fussed with it right now but can add a state into the arguments with navigate to use props */}
                    Encounter
                </button>
            </p>
            <p>Party View</p>
        </div>
    )
}

export default Sidebar;