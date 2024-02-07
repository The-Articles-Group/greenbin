import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom';
export default function homepage() {
  return (
    <div className='home-page'>
        <p className='logo'>
        <b>Green</b>bin
        </p>
        <div className="links">
            <div ></div>
            <Link to="/ServiceProvider" id='provider'>register as collector</Link>
            <Link to="/Register" id='reg'>register as new User</Link>
        </div>
    </div>
  )
  }