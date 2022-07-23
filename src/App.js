import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Courses from "./components/Courses/Courses";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
