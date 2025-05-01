import axios from 'axios';
import React from 'react';
function Delete() {
    const aa1=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value;
        await axios.delete(`https://crud-live-backend-8hg0.onrender.com/users/${id}`)
        alert("data delete")
    }
  return (
    <div style={{border:'2px solid green',padding:'10px'}}>
        <h1 style={{color:'green'}}>DELETE USERS</h1>
        <form  onSubmit={aa1}>
            <input type="text" name="id" placeholder='enter id' />
            <button type='submit'>Delete user</button>
        </form>
    </div>
  )
}

export default Delete