import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
// import './Devara.css'
import { Outlet } from "react-router-dom";


export function Devara(){
    let navigate=useNavigate()
    const[cookie,setcookie,removecookie]=useCookies('adminid')

    useEffect(()=>{
        if(cookie['adminid']==null){
            navigate('/login')
         }
    })

    function SignOut(){
        removecookie('adminid')
        navigate('/login')
    }
    const[Style,setstyle]=useState({})
    useEffect(()=>{
        setstyle({
            color:"red"

          })

    })
   
    return(
        <div  className="row">
             <h1 style={Style} >Devara</h1>
        {/* <div style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/en/f/f0/Devara_Part_1.jpg?20240827194728")',height:"100%",width:"100%"}}> */}
 

      <main className="card p-2 m-2 bg-secondary col-2" style={{width:"400px",textAlign:"center"}}>
        <iframe src="https://www.youtube.com/embed/rc61YHl1PFY"/>
        <div className="card-header">
        <h2 className="card-title text-bg-primary text-danger">Devara Part-1</h2>
        <p className="card-subtitle">
            <span className="bi bi-star-fill" style={{color:"red"}}></span> 7.5/10 (45k votes)
          <p style={{color:"gold"}}>2h 50m.Action Drama UA 27Sep,204</p>
        </p>
    
        </div>
        <div className="card-footer">
          <Link to="book"><button className="btn btn-danger me-3">Book Tickets</button></Link> 
          <button onClick={SignOut}className="btn btn-warning w-25">Logout</button>
        </div>

        
        

      </main>
      
      <div className="col-8">
     
<Outlet/>
      </div>

       


                
                  </div>
    )
}