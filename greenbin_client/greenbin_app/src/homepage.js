import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom';
export default function homepage() {
  return (
  
      <div className='home-page'>
          <p className='logo'>
          <b>Green</b>bin
          </p>
          <div className="links-box">
          
                <Link to="/provider" className='links'>register as collector</Link>
          
                <Link to="/user" className='links'>register as new User</Link>
          
          </div>
      </div>
 
  )
  }