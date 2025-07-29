import React from 'react'
import './Search.css'
function Search({setSearchInput}) {
  return (
    <div className='search-cont'>
        <input type="text" id='inputCont' placeholder='Search by name,username.....' onChange={(e)=>{
          setSearchInput(e.target.value)
          console.log(e.target.value)}}/>
        <p>🔍</p>
    </div>
  )
}

export default Search