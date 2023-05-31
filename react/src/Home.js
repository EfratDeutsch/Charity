import './Home.css'
import Menu from './Menu';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import { useState } from 'react';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";





export default function Home() {

    const [charities, setCharities] = useState([])
    const [charity, setCharity] = useState("")
    const [city, setCity] = useState("")
    const [CharityId, setCharityId] = useState(Number)
    const [cities,setCities]=useState([])
    const navigate = useNavigate();
    const [statet,setStatet]=useState("")
  

    useEffect(() => {
        getAllCharties()
        getAllCities()
        
    }, []);



    const getAllCharties = async () => {
        try {
            await axios.get(`https://localhost:44397/api/Charity`)
                .then(res => {

                    console.log(res);
                    setCharities(res.data)
                }
                )
        }

        catch (err) {
            console.log(err);
        }

    }

    const getAllCities = async () => {
        try {
            const citiess = axios.get(`https://localhost:44397/api/City`)
                .then(res => {

                    console.log(res);
                    setCities(res.data)
                    console.log(cities);
                    Show()
                }
                )
        }

        catch (err) {
            console.log(err);
        }

    }


    console.log(cities);


const Show=()=>{
  charities.map((a)=>{console.log("what")}) 
        
}
 const serchFnction=()=>{

}

const newCharity=()=>{
    navigate(`/Manager`);
   
}
const managCharity=()=>{
    navigate(`/Manager`);
   
}
    
    return (
        <>

            <div id="title">מרכז הגמחים הדיגיטלי  </div>
            <div id="title2">  הגדול בעולם  </div>
            <div id="miniTitle"> !כאן אפשר לנהל גמח בפלטפורמה אחרת</div>
            <button id="button" onClick={newCharity}>פתיחת גמח חדש</button>
            <button id="Managebutton" onClick={managCharity}> לאיזור ניהול גמח</button>
            <a id="homeLink" href="./AboutUs"> דף הבית </a>
            <a id="charityLink" href="./CategoryMenu"> רשימת_גמחים </a>
            <Dropdown  id="dropDown"  value={charity} options={charities}  optionLabel="charityName" optionValue="charityId" onChange={(e) => {setStatet({charity: e.value})}} placeholder="איזה גמח אתה מחפש? "/>
            <Dropdown  id="cityDropDown"  value={city} options={cities}  optionLabel="cityName" optionValue="cityId" onChange={(e) => {this.setState({charity: e.value})}} placeholder="עיר "/>
            <button id="searchButton" body={serchFnction}>חיפוש</button>



        </>

    )
}