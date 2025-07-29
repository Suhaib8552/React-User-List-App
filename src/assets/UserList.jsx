import React from 'react'
import { useEffect, useState } from "react";
import User from "./User";
import Search from "./Search";

function UserList() {

    const [users,setUsers]=useState([])

    const [searchInput,setSearchInput]=useState("");

    const [filteredUsers,setFilteredUsers]=useState([...users])

     const userDetails=async ()=>{
  try {
    const resp=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await resp.json();
    setUsers(data)
    
  } catch (error) {
    console.log(error)
  }
 }

useEffect(()=>{
  userDetails()
},[])


useEffect(()=>{
  if(searchInput.trim()===""){
    setFilteredUsers(users)
  }else{
  const filtered=users.filter((user)=>{
    return user.name.trim().toLowerCase().includes(searchInput.trim().toLowerCase()) || user.username.trim().toLowerCase().includes(searchInput.trim().toLowerCase())
  })
  setFilteredUsers(filtered)
}
},[searchInput,users])


  return (
    <>
    <div className="search-container">
      <Search setSearchInput={setSearchInput}/>
    </div>
      <div className="user-list">
        {filteredUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
      </div>
    </>
  )
}

export default UserList