import {useCookies} from "react-cookie"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login(){
    const[theme,setTheme]=useState('w-25 border border-3 border-info m-3')
    const[btn,setbtn]=useState('btn btn-dark w-100 ')
    const[style,setstyle]=useState({})
    function handlethemeChange(e){
    
        if(e.target.checked){
            setTheme('w-25 bg-dark text-white border border-3 border-info')
            setbtn('btn btn-danger w-100')

            
        }
        else{
            setTheme('w-25')
            setbtn('btn btn-dark w-100')
        }
    }
    const[cookie,setcookie,removecookie]=useCookies('adminid')
    const[userid,setuserid]=useState('')
    const navigate=useNavigate()
    function handleClick(e){
        setuserid(e.target.value)
    }
    function loginClick(){
        setcookie('adminid',userid,'expires=Sat, 6 Sep 2024 00:00:00 GMT')
        navigate('/devara')
    }
    return(
        <div className="d-flex justify-content-center m-4">
        <form className={theme} >
   <div className="form-switch">
       <input type="checkbox" className="form-check-input" onChange={handlethemeChange}/> <label className="form-check-label">Dark Mode</label>
   </div>
   <div>
       <h3 className="bi bi-person">User Login</h3>
       <dl>
           <dt>User Name</dt>
           <dd><input type="text" className="form-control" onClick={handleClick}/></dd>
           <dt>Password</dt>
           <dd><input type="password" className="form-control"/></dd>
       </dl>
       <button className={btn}onClick={loginClick}>Login</button>
   </div>
</form>
   </div>
    )
}