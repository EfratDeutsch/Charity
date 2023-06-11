import './Home.css'
import Menu from './Menu';
import Walla from './WhatWillUFindInUs';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";
import { useState } from 'react';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Linkdin } from "./linkdin.svg"
import { ReactComponent as Twitter } from "./twitter.svg"
import { ReactComponent as Insegram } from "./instegram.svg"
import { ReactComponent as Facebook } from "./facebook.svg"



export default function Home() {

    const [charities, setCharities] = useState([])
    const [charity, setCharity] = useState("")
    const [city, setCity] = useState("")
    const [cities, setCities] = useState([])
    const navigate = useNavigate();
    const [statet, setStatet] = useState("")
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [resultArray, setResultArray] = useState([])


    useEffect(() => {
        getAllCharties();
        getAllCities();
        getAllCategories();

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

    const getAllCategories = async () => {
        try {
            await axios.get(`https://localhost:44397/api/Category`)

                .then(res => {

                    console.log(res);
                    setCategories(res.data)
                }
                )
        }
        catch (error) {
            console.log(error);
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


    const Show = () => {
        charities.map((a) => { console.log("what") })

    }
    const serchFnction = async () => {
        try {
            let categoryId = category
            let cityId = city
            const res = await axios.get(`https://localhost:44397/api/Charity/getFilter?categoryId=${categoryId}&cityId=${cityId}`)
            console.log(res.data)
            setResultArray(res.data)
            navigate(`/Charity/${categoryId}/${cityId}`)
        }

        catch (error) {
            console.log(error);
        }
    }

    const newCharity = () => {
        navigate(`/Manager`);

    }
    const managCharity = () => {
        navigate(`/Manager`);

    }

    return (
        <>

            <div id="backGround">
                <div id="title"> מרכז הגמחים הדיגיטלי הגדול בעולם  </div>
                <div id="miniTitle"> !כאן אפשר לנהל גמח בפלטפורמה אחרת</div>
                <div id="papularCharities">גמחים פופולרים:)</div>
                <button id="button" onClick={newCharity}>פתיחת גמח חדש</button>
                <button id="Managebutton" onClick={managCharity}> לאיזור ניהול גמח</button>
                <a id="homeLink" href="./AboutUs"> דף הבית </a>
                <a id="charityLink" href="./CategoryMenu"> רשימת_גמחים </a>
                <button id="searchButton" onClick={serchFnction}>חיפוש</button>
                <Dropdown id="dropDown" value={category} options={categories} optionLabel="categoryName" optionValue="categoryId" onChange={(e) => setCategory(e.value)} editable placeholder="גמח" className="w-full md:w-14rem " />
                <Dropdown id="cityDropDown" value={city} options={cities} optionLabel="cityName" optionValue="cityId" onChange={(e) => setCity(e.value)} placeholder="עיר " />
            </div>
            {/* <Walla id="walla"></Walla> */}
            <div id="downLine">
           < a id="conectWith">Connect With Us</a>
           <a id="linkdin"><Linkdin/></a>
           <a id="twitter"><Twitter/></a>
           <a id="facebook"><Facebook/></a>
           <a id="instegram"><Insegram/></a>
           <a id="menu">חיפוש</a>
           <a id="menu">ניהול</a>
           <a id="menu">יציאה</a>
           <a id="menu">בית</a>
           <a id="menu">אודות</a>
           <a id="menu">התחברות</a>
            </div> 
        </>

    )
}