import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes ,Route,Link} from 'react-router-dom';
import { BookmyshowHeader } from './Cinemaworld/bookmyshowheader';
import { Movies } from './Cinemaworld/movies';
import { Devara } from './Cinemaworld/Devara';
import { BookTicket } from './Cinemaworld/booktickets';
import { Login } from './Cinemaworld/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
            <nav className="d-flex  justify-content-between  align-items-center bg-primary text-white">
                <div className="m-1">
                <Link to="/" className='text-decoration-none link-light'><img src="bookshow.png" height="30%" width="30%"/></Link>  
                </div>

                <div className="input-group w-50 m-3" >
                    <span className="bi bi-search m-1"></span>
                 <input type="text"  className="form-control"  placeholder="book your ticket"/>
                </div>
                <div>
                    <select className="form-select ms-3">
                        <option>Hyderabad</option>
                        <option>Vizag</option>
                       <option>Vijayawada</option>
                    </select>
                   
                </div>
                <div>
                        <button className="btn btn-danger">Sigin</button>
                    </div>
            </nav>

            <div>
            <nav className="d-flex mb-3 justify-content-between p-2 bg-dark text-white">
            
                <div>
                    <span className="me-3"><Link to="/" className='text-decoration-none link-light'>Movies</Link></span>
                    <span className="me-3">Events</span>
                    <span className="me-3">Sports</span>
                    <span className="me-3">Activities</span>

                </div>
                <div>
                    <span className="me-3">ListYourshow</span>
                    <span className="me-3">Cooperates</span>
                    <span className=" me-3">offers</span>
                    <span className=" me-3">Gifcard</span>
                </div>
                
            </nav>


            </div>
      
      
     
      <Routes>
        {/* <Route path="/" element={<BookmyshowHeader/>}/> */}
        <Route path="/" element={<Movies/>}>
     
        </Route>
        <Route path='devara'  element={<Devara/>}>
        <Route path='book' element={<BookTicket/>}/>

        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<div><p>Invalid page</p></div>}/>
       
      </Routes>
      </BrowserRouter>

    
  
    </div>
  );
}

export default App;
