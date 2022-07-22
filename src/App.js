import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Courses from "./components/Courses/Courses";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
