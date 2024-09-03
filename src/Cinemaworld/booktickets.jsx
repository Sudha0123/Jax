export function BookTicket(){
    return(
        <div>
             <nav class="d-flex justify-content-around bg-dark text-white p-2">
               
               <div>
                   <select class="form-select" id="lstlocations">
                   <option>Select Location</option>
                   <option>Hyderabad</option>
                   <option>Razole</option>
   
                  </select>
                   </div>
                   <div>
                       <select class="form-select" id="lstdates">
                       <option>Select Date</option>
                       <option>25-07-2023</option>
                       <option>26-07-2023</option>
       
                      </select>
                       </div>
                       <div>
                           <select class="form-select" id="lstseats">
                           <option>Select seats</option>
                           <option>1</option>
                           <option>2</option>
           
                          </select>
                          </div>
                          <div>
                           <select class="form-select" id="lsttimings">
                           <option>Select timings</option>
                           <option>10:00 AM</option>
                           <option>10:00pm</option>
           
                          </select>
                           </div>
                           <div>
                           <button class="btn btn-danger"  data-bs-dismiss="modal" onclick="bookclick()">Book</button>
                           </div>

               </nav>
        </div>
    )
}