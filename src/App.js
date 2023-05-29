import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash from './components/dash';
import NavBar from './components/nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/thelist" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
