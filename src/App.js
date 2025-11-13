import { Routes, Route } from 'react-router-dom';
import SimulationSelection from './SimulationSelection';
import Sim1 from './simulations/Sim1';
import Sim2 from './simulations/Sim2';
// ... Sim3 ~ Sim6도 import

function App() {
  return (
    <Routes>
      <Route path="/" element={<SimulationSelection />} />
      <Route path="/sim1" element={<Sim1 />} />
      <Route path="/sim2" element={<Sim2 />} />
      <Route path="/sim3" element={<Sim3 />} />
      <Route path="/sim4" element={<Sim4 />} />
      <Route path="/sim5" element={<Sim5 />} />
      <Route path="/sim6" element={<Sim6 />} />
    </Routes>
  );
}

export default App;
