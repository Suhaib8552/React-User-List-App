import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./Login.css"


const Login = () => {
  
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    
    
    const users=JSON.parse(localStorage.getItem("user-list")) || [];

    const existingUser=users.find(user=>user.email===email)

    if(!existingUser){
      alert("No such user exists")
    }
    else if(existingUser.password!==password){
      alert("Incorrect password")
    }
    else{
      setTimeout(()=>{
        
        navigate("/User-List")
      },500)
    }

  }

  return (
    <div className="login-container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit} >
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
        <button type="submit" >Login</button>
      </form>
      <p>Don't have an account? <Link to="/register" className="link">Register</Link></p>
    </div>
  );
};



export default Login;
