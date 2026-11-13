import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Leontar } from './pages/Leontar/Leontar';
import { FrostyLagoon } from './pages/FrostyLagoon/FrostyLagoon';
import { PlaceIndustrial } from './pages/PlaceIndustrial/PlaceIndustrial';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leontar" element={<Leontar />} />
          <Route path="/frosty-lagoon" element={<FrostyLagoon />} />
          <Route path="/place-industrial" element={<PlaceIndustrial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
