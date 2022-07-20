import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
