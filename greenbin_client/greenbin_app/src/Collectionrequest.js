import React from "react";

export default function Collectionreq(){
    return(
        <div className="req-box">
            <label>Bio Waste</label><input type="number" placeholder="no.of sac's" /><br /><br />
            <label>Plastic Waste</label><input type="number"/><br /><br />
            <label>Electronic Waste</label><input type="number" /><br /><br />
            <button>Pick Up</button>
            
        </div>
    )
}