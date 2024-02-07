import '../styles/request.css'; 
export default function Collectionreq(){
    return(
            <div className="req-box">
                
                <label>Bio Waste</label><input type="number" placeholder="no.of sac's" /><br /><br />
                <label>Plastic Waste</label><input type="number" placeholder="no.of sac's"/><br /><br />
                <label>Electronic Waste</label><input type="number" placeholder="no.of sac's"/><br /><br />
                <button>Pick Up</button>


                <div className='status-box'>
                    <p id="Status"></p>
                </div>
            </div>
    )
}

let statuses =["Waiting","Done","Assigned"];
if(statusOfRequest.status === statuses[2]){
    document.getElementById("Status").value = statuses[2] +'<br>'+ `Approx date ${statusOfRequest.date}`;
}