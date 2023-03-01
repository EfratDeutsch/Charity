import React from 'react'
import {useState}  from 'react'
import axios from "axios";

export default function Signin(){

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    
    const NewUser={UserName:userName,Password:password,FirstName:firstName,LastName:lastName};

    const PostUser=async()=>{
        try{ 
            await axios.post(`https://localhost:44397/api/User`,NewUser)
           
            .then(response =>{
                console.log(response.data.firstName);
              alert("הי ממי צדיק "+response.data.firstName+" אנחנו אפילו יודעים מה השם משפחה שלך"+response.data.lastName);  
            })
        }
        catch(error){
            console.log(error);

        }
    }
    return(
        <div>
            <h1> ברוכים הבאים לקומפוננטת סינינ</h1>
            <input className='input' type="text" placeholder='הכנס שם משתמש' onChange={(e)=>setUserName(e.target.value)}></input>
            <input className='input' type="password" placeholder='הכנס סיסמא' onChange={(e)=>setPassword(e.target.value)}></input>
            <input className='input' type="text" placeholder='שם פרטי ' onChange={(e)=>setFirstName(e.target.value)}></input>
            <input className='input' type="text" placeholder='שם משפחה ' onChange={(e)=>setLastName(e.target.value)}></input>
            <button onClick={PostUser}>אני רוצה</button>
        </div>
    )
}