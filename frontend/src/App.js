import LandingPage from './Components/LandingPage';
import Navbarr from './Components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Consultants from './Components/Consultants';
import Leaders from './Components/Leaders';
import Divisions from './Components/Divisions';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route index element={<LandingPage />} />
        <Route path='/Consultants' element={<Consultants />} />
        <Route path='/equipe-dirigeante' element={<Leaders/>} />
        <Route path='/nos-divisions' element={<Divisions />} />
      </Routes>
    </div>
  );
}

export default App;
