import React from 'react'
import '../styles/register.css'
export default function register() {
  return (
    <div className='formContainer'>
      <form className='register'>
        <label>Name</label><input type="text" /><br />
        <label>Phone No</label><input type="text" /><br />
        <label>Aadhar No</label><input type="text" /><br />
        <label>Address</label><input type="text" /><br />
        <label>Ward No</label><input type="text" /><br />
        <button value="Register"> Register </button>
      </form>
    </div>
  )
}
