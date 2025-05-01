import axios from 'axios'
import React from 'react'

function Resister() {
    const adi=async(e)=>{
        e.preventDefault()
        const user={
            name:e.target.name.value,
            age:e.target.age.value
        }
        await axios.post('https://crud-live-backend-8hg0.onrender.com/users',user)
        alert("data successfully save")
    }
  return (
    <div style={{border:'2px solid green',padding:'10px'}}>
        <h1 style={{color:'green'}}>CREATE USERS</h1>
        <form onSubmit={adi}>
            <label>NAME: <input type="text" name="name" /></label>
            <label>AGE: <input type="text" name="age" /></label>
            <button type='submit'>SAVE DATA</button>
        </form>
    </div>
  )
}

export default Resister