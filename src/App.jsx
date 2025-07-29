
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./assets/Login";
import Register from "./assets/Register"
import UserList from "./assets/UserList";
import Header from "./assets/Header";

function App() { 

  
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/User-List" element={<UserList />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
