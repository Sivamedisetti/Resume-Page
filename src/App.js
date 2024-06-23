import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './Mainpage';
import Slider from './Slider';
import Info from './info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
