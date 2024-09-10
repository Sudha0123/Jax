import { useState } from "react"
import { Link } from "react-router-dom"

export function BookTicket(){
    const[val,setval]=useState({Location:"",Date:"",Seats:"",Timing:""})
    const[form,setform]=useState({Location:"",Date:"",Seats:"",Timing:""})
    const[appear,setappear]=useState({display:"none"})
    const[fill,setfill]=useState('d-flex justify-content-around bg-dark text-white p-2 m-4')
    const[amount,setamount]=useState(0)
    
    
    function locationClick(e){

        setval({
            Location:e.target.value
        })
      
    }
    function dateClick(e){
        setval({
            Location:val.Location,
            Date:e.target.value
        })
    }

        function seatClick(e){
            setval({
                Location:val.Location,
                Date:val.Date,
                Seats:e.target.value

            })

            var i=200;
           var j= parseInt(e.target.value)*i;
            setamount(j)
            
        }

        function timingClick(e){
            setval({
                Location:val.Location,
                Date:val.Date,
                Seats:val.Seats,
                Timing:e.target.value

            })
        }

        function bookClick(){
             setappear({
                display:"block",
                marginLeft:"20%"
            })
            setfill('d-none')
               
            

           

            setform(val)
           

        }
    
    
    return(
        <div>
             <nav className={fill} >
               
               
               <div>
                   <select class="form-select" id="lstlocations" onChange={locationClick}>
                   <option>Select Location</option>
                   <option>Hyderabad</option>
                   <option>Razole</option>
   
                  </select>
                   </div>
                   <div>
                       <select class="form-select" id="lstdates" onChange={dateClick}>
                       <option>Select Date</option>
                       <option>25-07-2023</option>
                       <option>26-07-2023</option>
       
                      </select>
                       </div>
                       <div>
                           <select class="form-select" id="lstseats" onChange={seatClick}>
                           <option>Select seats</option>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
           
                          </select>
                          </div>
                          <div>
                           <select class="form-select" id="lsttimings" onChange={timingClick}>
                           <option>Select timings</option>
                           <option>10:00 AM</option>
                           <option>10:00pm</option>
           
                          </select>
                           </div>
                           <div>
                           <button class="btn btn-danger" data-bs-target="#login" data-bs-toggle="modal" onClick={bookClick}>Book Now</button>
                           </div>
                          
                          

               </nav>
              
               <div style={appear}> 
               <div class="modal fade modal-fullscreen " id="login">
        <div class="modal-dialog ">
        <div class="modal-content">
        <div class="modal-header bg-warning">
        <h3 className="text-info"><span className="bi bi-film  text-primary" ></span> Booking Confirmation</h3>
        </div>
        <div class="modal-body">
           
        <dl>
                <dt className="text-primary">Location</dt>
                <dd>{form.Location}</dd>
                <dt  className="text-primary">Date</dt>
                <dd >{form.Date}</dd>
                <dt  className="text-primary">Seats</dt>
                <dd>{form.Seats}</dd>
               <dt  className="text-primary">Timing</dt>
               <dd>{form.Timing}</dd>
               <dt  className="text-primary">Amount</dt>
               <dl>{amount}</dl>
               </dl>

        </div>
        <div class="modal-footer">
           <Link to='/pay'> <button class="btn btn-danger">
                Pay Rs. {amount}
            </button>
            </Link>
            <button data-bs-dismiss="modal" class="btn btn-danger">Cancel</button>

        </div>
        </div>
        </div>
    </div>

               </div>
             
               
        </div>
    )
}
