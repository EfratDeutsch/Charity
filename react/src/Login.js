import { useState } from 'react';
import axios from "axios";
import React from 'react';
import Menu from './Menu';
import { useNavigate } from "react-router-dom"
import { ReactComponent as Ill6 } from "./illustration6.svg"
import { ReactComponent as Ill7 } from "./illustration7.svg"
import { ReactComponent as Ill8 } from "./illustration8.svg"
import { ReactComponent as Ill9 } from "./illustration9.svg"
import { ReactComponent as Google } from "./google.svg"
import { ReactComponent as Logo } from "./logoIll.svg"
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
                    localStorage.setItem("userId", response.data.userId);
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
            
                <div id="page"><div id="rightSide">
                <Ill6 id="ill6"></Ill6>
                        <Ill7 id="ill7"></Ill7>
                        <Ill8 id="ill8"></Ill8>
                        <Ill9 id="ill9"></Ill9> </div>
                        <Logo></Logo>
                        <a id="charityManageCaption">הרשמה</a>
                <input id='inputush1' type="text" placeholder='הכנס שם משתמש' onChange={(e) => setUserName(e.target.value)}></input>
                <input id='inputush2' type="password" placeholder='הכנס סיסמא' onChange={(e) => setPassword(e.target.value)}></input>
                <input id='inputush3' type="text" placeholder='שם פרטי ' onChange={(e) => setFirstName(e.target.value)}></input>
                <input id='inputush4' type="text" placeholder='שם משפחה ' onChange={(e) => setLastName(e.target.value)}></input>
               
                <button id="entertothesite2" onClick={PostUser}> <a id="entertositecaption">שלב הבא</a> </button>
                </div></>:
                <>

                    <div id="page" ><div id="rightSide">
                        <Ill6 id="ill6"></Ill6>
                        <Ill7 id="ill7"></Ill7>
                        <Ill8 id="ill8"></Ill8>
                        <Ill9 id="ill9"></Ill9> 
                        </div>
                        <Logo></Logo>
                        <a id="charityManageCaption">הכנס ונהל את הגמח שלך</a>
                       
                        <div id="line"></div>
                        <div id="orBox"></div> <div id="or">או</div>
                        <input id="inputush1" type="text" placeholder ="                                                                                   אימייל" onChange={(e) => setUserName(e.target.value)} ></input>
                        <input id="inputush2" type="password" placeholder="                                                                                 סיסמא" onChange={(e) => setPassword(e.target.value)} ></input>
                        <button id="entertothesite" onClick={GetUser}> <a id="entertositecaption">כניסה</a> </button>
                        <button id="googleButton"><Google id="google"></Google><a id="googlecaption">continue with google</a> </button>
                    
                       <a id="newCharityManagment">?מנהל גמח חדש</a>  
                    <button  id="signinbutton" onClick={() => setClickedSignUp(true)}><a id="captionJoin">...הצטרף אלינו</a></button>
                    </div></>}



        </div>

    )

}

