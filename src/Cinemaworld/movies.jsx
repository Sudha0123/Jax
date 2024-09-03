// import  backgroud from 'logo192.png'
// import "../public/logo192.png"
// import logo512.png from "../public/logo192.png"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
export function Movies(){
  // const[errorStyle,setStyle]=useState({})
  // setStyle({
  //   backgroundImage:"url(logo192.png)"
  // })
    return(

<div className="Container-fluid">
<div className='me-3'>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="bookmyshow1.png" class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="bookmyshow2.png" class="d-block w-100" />
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="bookmyshow3.png" class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div class="carousel-indicators">
    <button class="active" data-bs-slide-to="0" data-bs-target="#carouselExample"></button>
    <button class="active" data-bs-slide-to="1" data-bs-target="#carouselExample"></button>
    <button class="active" data-bs-slide-to="2" data-bs-target="#carouselExample"></button>
    {/* <button class="active" data-bs-slide-to="3" data-bs-target="#top"></button> */}
  </div>
         
</div> 
            </div>
  <h1 className="text-primary">Indian Movies</h1>
  <main className="d-flex"  background="../public/OG.jpg" >
   <Link to="devara" className="text-decoration-none"><div className="card me-4 bg-info" style={{width:"250px"}}>
      <img src='Devara_Part_1.jpg ' className="card-img-top" height="125%"/>
      <div class="card-header">
                <h2 class="card-title" style={{color:'red'}}>Devara</h2>
                <p class="card-subtitle"><span class="bi bi-calendar">27 September 2024</span> </p>
            </div>
            
    <div className="card-footer">

      <span className="bi bi-star-fill" style={{color:"red"}}></span>7.5/10 45K Votes
      
      </div>
     

    </div>
    </Link>
    <div className="card me-4 bg-info" style={{width:"250px"}}>
      <img src='OG.jpg' className="card-img-top" height="125%"/>
      <div class="card-header">
                <h2 class="card-title" style={{color:'red'}}>OG</h2>
                <p class="card-subtitle"><span class="bi bi-calendar">27 March 2025</span> </p>
            </div>
            
    <div className="card-footer">

      <span className="bi bi-star-fill" style={{color:"red"}}></span>7.5/10 45K Votes
      
      </div>

    </div>
    <div className="card bg-info me-4" style={{width:"250px"}}>
      <img src='Pushpa.jpg' height="125%" className="card-img-top"/>
      <div class="card-header">
                <h2 class="card-title" style={{color:'red'}}>Puspha</h2>
                <p class="card-subtitle"><span class="bi bi-calendar">6 December 2024</span> </p>
            </div>
            
    <div className="card-footer">

      <span className="bi bi-star-fill" style={{color:"red"}}></span>7.5/10 45K Votes
      
      </div>

    </div>
    <div className="card bg-info me-4" style={{width:"250px"}}>
      <img src='Game.jpg' className="card-img-top" height="125%"/>
      <div class="card-header">
                <h2 class="card-title" style={{color:'red'}}>Game Changer </h2>
                <p class="card-subtitle"><span class="bi bi-calendar">27 December 2024</span> </p>
            </div>
            
    <div className="card-footer">

      <span className="bi bi-star-fill" style={{color:"red"}}></span>7.5/10 45K Votes
      
      </div>

    </div>
   

  </main>
  

       
</div> 

    )
}