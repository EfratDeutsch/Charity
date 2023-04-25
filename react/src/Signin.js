import React from 'react'
import {useState}  from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
export default function Signin(){

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const navigate = useNavigate();
    const NewUser={UserName:userName,Password:password,FirstName:firstName,LastName:lastName};

    const PostUser=async()=>{
        try{ 
            await axios.post(`https://localhost:44397/api/User`,NewUser)
           
            .then(response =>{
                console.log(response.data);
              alert("הי ממי צדיק "+response.data.firstName+" אנחנו אפילו יודעים מה השם משפחה שלך"+response.data.lastName);  
              navigate("/Login")
            })
        }
        catch(error){
            console.log(error);

        }
    }
    return(
        <div>
            <Menu></Menu>
            <h1> ברוכים הבאים לקומפוננטת סינינ</h1>
            <input className='input' type="text" placeholder='הכנס שם משתמש' onChange={(e)=>setUserName(e.target.value)}></input>
            <input className='input' type="password" placeholder='הכנס סיסמא' onChange={(e)=>setPassword(e.target.value)}></input>
            <input className='input' type="text" placeholder='שם פרטי ' onChange={(e)=>setFirstName(e.target.value)}></input>
            <input className='input' type="text" placeholder='שם משפחה ' onChange={(e)=>setLastName(e.target.value)}></input>
            <button onClick={PostUser}>אני רוצה</button>
        </div>
    )
}