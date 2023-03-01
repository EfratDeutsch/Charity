import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(){
const [userName,setUserName]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

const GetUser=async()=>{
    try{
        await axios.get(`https://localhost:44397/api/User/?userName=${userName}&password=${password}`)

        .then(response =>{
            alert(response.data.firstName);  
        })
    }
    catch(error){
        console.log(error)
    }
}


const SignIn=()=>{
navigate("/SignIn")

}

return(

    <div>
        <input className="input" type="text" placeholder="הכנס לנו כאן שם משתמש🧓" onChange={(e)=>setUserName(e.target.value)} ></input>
        <input className="input" type="password" placeholder="אנחנו רוצים גם את הסיסמא שלך צדיק" onChange={(e)=>setPassword(e.target.value)} ></input>
       <button onClick={GetUser}>אני כלכך רוצה להיכנס👩‍🦰🧓👩👨‍🦱</button>
       <button onClick={SignIn}>אנירוצה להירשם לאתר שלכם</button>
   
   
    </div>

)

}

