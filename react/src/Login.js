import { useState } from 'react';
import axios from "axios";
import React from 'react';
import Menu from './Menu';
import { useNavigate } from "react-router-dom"
import "./Login.css";

export default function Login({ setUserId }) {
    const [clickedSignUp, setClickedSignUp] = useState(false)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate()

    const GetUser = async () => {
        try {
            const user = await axios.get(`https://localhost:44397/api/User/?userName=${userName}&password=${password}`)

                .then(response => {
                    alert(response.data.firstName);
                    console.log(response.data);

                    sessionStorage.setItem("User", JSON.stringify(response.data));
                    setUserId(response.data.userId);
                    localStorage.setItem("userId",response.data.userId);
                    navigate("/Manager");
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    const NewUser = { UserName: userName, Password: password, FirstName: firstName, LastName: lastName };

    const PostUser = async () => {
        try {
            await axios.post(`https://localhost:44397/api/User`, NewUser)

                .then(response => {
                    console.log(response.data);
                    alert("הי ממי צדיק " + response.data.firstName + " אנחנו אפילו יודעים מה השם משפחה שלך" + response.data.lastName);

                    setClickedSignUp(false)
                })
        }
        catch (error) {
            console.log(error);

        }
    }

    return (

        <div>

            {/* <Menu></Menu> */}
            {clickedSignUp ? <>
                <input className='input' type="text" placeholder='הכנס שם משתמש' onChange={(e) => setUserName(e.target.value)}></input>
                <input className='input' type="password" placeholder='הכנס סיסמא' onChange={(e) => setPassword(e.target.value)}></input>
                <input className='input' type="text" placeholder='שם פרטי ' onChange={(e) => setFirstName(e.target.value)}></input>
                <input className='input' type="text" placeholder='שם משפחה ' onChange={(e) => setLastName(e.target.value)}></input>
                <button onClick={PostUser}>אני רוצה</button></> :
               
                <> 
                
                <div id="page" ><div id="on"></div><div id="rightSide"> <div id="on2"></div></div>
                <a id="charityManageCaption">הכנס ונהל את הגמח שלך</a>
                <div id="line"></div>
                <div id="orBox"> </div><div id="or">or</div>
                
                <input id="inputush1" type="text" placeholder="הכנס לנו כאן שם משתמש🧓" onChange={(e) => setUserName(e.target.value)} ></input>
                    <input id="inputush2"  type="password" placeholder="אנחנו רוצים גם את הסיסמא שלך צדיק" onChange={(e) => setPassword(e.target.value)} ></input>
                    <button id="entertothesite" onClick={GetUser}> <a id="entertositecaption">כניסה</a> </button>
                    <button onClick={() => setClickedSignUp(true)}>אנירוצה להירשם לאתר שלכם</button>
                    <div id="googleButton"></div>
                    </div></>}



        </div>

    )

}

