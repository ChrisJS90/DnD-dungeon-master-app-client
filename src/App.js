import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import NewCharacter from './pages/new-character';
import Encounter from './pages/encounter'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new_character" element={<NewCharacter />} />
          <Route path="/encounter" element={<Encounter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
