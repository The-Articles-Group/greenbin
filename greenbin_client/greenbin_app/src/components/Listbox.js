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
          <h3 className='pickup-area'>Nadakkav</h3>
          <p className='pickup-house'>JADJLHAID</p>
          <p className='pickup-name'>shankar</p>
          <p className='pickup-phone'>3654972534</p>
          {/* <button className='pickup-location' onclick={loc(lang,long)}>Map</button><br /> */}
          <button>Picked</button><button>Missed</button>
        </div>
      </div>
    </div>
  )
}
