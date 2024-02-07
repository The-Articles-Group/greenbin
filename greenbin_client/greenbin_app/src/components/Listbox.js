import React from 'react'
import '../styles/list.css'

export default function Listbox() {
    const loc=(lang,long)=>{
        window.location.href = "https://www.google.co.in/maps/@"+lang+","+long+",14.81z?entry=ttu"
    }
  return (
    <div className='list-container'>
     <div className="box">
        <div className='lists'>
          <span className='pickup-area'>Nadakkav</span>
          <span className='pickup-house'>Jihad</span>
          <span className='pickup-name'>shankar</span>
          <span className='pickup-phone'>3654972534</span>
          {/* <button className='pickup-location' onclick={loc(lang,long)}>Map</button><br /> */}
          <button>Picked</button><button>Missed</button>
        </div>
      </div>
    </div>
  )
}
