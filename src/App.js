import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Help from './pages/Help';
import SPGame from './pages/SPGame';

function App() {
  return (
    <div id="app">
      <Routes>
          <Route index element={<MainMenu />} />
          <Route path="/singleplayer" element={<SPGame multi={true}/>} />
          <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
