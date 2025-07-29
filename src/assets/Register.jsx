import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"
import { useNavigate } from "react-router-dom";


const Register = () => {
  
  const[name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const user={name,email,password}

    const users=JSON.parse(localStorage.getItem("user-list")) || [];

    const existingUser=users.find(user=>user.email===email)
    if(existingUser){
      alert("User already exists")
      return;
    }
    users.push(user)

    try {
      localStorage.setItem("user-list",JSON.stringify(users))
      console.log("user saved")
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className="register-container">
      <h2 className="heading">Register</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          
        />
        <button type="submit" >Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login" className="link">Login</Link></p>
    </div>
  );
};



export default Register;
