import {useCookies} from "react-cookie"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login(){
    const[style,setstyle]=useState({})
    useEffect(()=>{
        setstyle({
            alignItems:"center"
        })
    })
    const[cookie,setcookie,removecookie]=useCookies('adminid')
    const[userid,setuserid]=useState('')
    const navigate=useNavigate()
    function handleClick(e){
        setuserid(e.target.value)
    }
    function loginClick(){
        setcookie('adminid',userid)
        navigate('/devara')
    }
    return(
        <div>
             <h1 style={{color:"powderblue"}}>User Login</h1>
        <dl >
            <dt style={{color:"red"}}>Username</dt>
            <dd><input type="text" className="form-control w-25" onChange={handleClick}/></dd>
            <dt style={{color:"red"}}>Password</dt>
            <dd><input className="form-control w-25" type="password"/></dd>

        </dl>
        <button className="btn btn-danger"onClick={loginClick}>Login</button>
        </div>
    )
}