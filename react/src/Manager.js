import { isClickableInput } from '@testing-library/user-event/dist/utils';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Manager() {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);
  const [cityNum, setCityNum] = useState(Number);
  const [categoryId, setCategoryId] = useState(Number);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [neigborhood, setNeigborhood] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState(Number)
  const [charities, setCharities] = useState([])
  useEffect(() => {
    getCategories()
    GetAllCities()
    GetDataFromSession()
    getUsersCharities()

  }, [])

  const GetDataFromSession = () => {
    const obj = JSON.parse(sessionStorage.getItem("User"));
    setUserId(obj.userId)


  }

  

  const getUsersCharities = async () => {
    try {
      await axios.get(`https://localhost:44397/api/Charity/${userId}`)
      .then(res=>{
   
        console.log(res.data);
        setCharities(res.data)
      
        console.log(charities);
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  const NewCharity = { CharityName: name, CategoryId: categoryId, UserId: userId, CityId: cityNum, Neighborhood: neigborhood, CharityDesc: desc, Phone: phone }
  const saveCharity = async () => {

    try {
      await axios.post('https://localhost:44397/api/Charity', NewCharity)
        .then(res => {
          alert("רשמת גמח ממי" + res.name)
        })
    }
    catch (error) {
      console.log("error in save charity");
      console.log(error);
    }
  }



  const getCategories = async () => {
    try {
      const res = await axios.get('https://localhost:44397/api/Category')
      setCategoriesArray(res.data);
      console.log(res.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const GetAllCities = async () => {
    try {
      const res2 = await axios.get(`https://localhost:44397/api/City`)
      console.log(res2);
      setCitiesArray(res2.data);
      console.log(citiesArray);
    }
    catch (error) {
      console.log(error);
    }
  }


  const cityComboBox =
    <select onChange={(e) => setCityNum(e.target.value)}>
      {
        citiesArray.map((a, i) =>
          <option key={i} value={a.cityId} >{a.cityName}</option>
        )

      }</select>

  const categoryComboBox =
    <select onChange={(e) => setCategoryId(e.target.value)}>
      {categoriesArray.map((a, i) =>
        <option key={i} value={a.categoryId} >{a.categoryName}</option>
      )}
    </select>


  return (
    <tbody>
      <h1>  מנהל מוסיף גמח</h1>

      {categoryComboBox}
      <input className="input" type="text" placeholder='שם גמח' onChange={(e) => setName(e.target.value)}></input>
      {cityComboBox}
      <input className="input" type="text" placeholder='שכונה' onChange={(e) => setNeigborhood(e.target.value)}></input>
      <input className="input" type="text" placeholder='תאור' onChange={(e) => setDesc(e.target.value)}></input>
      <input className="input" type="text" placeholder='טלפון' onChange={(e) => setPhone(e.target.value)}></input>
      <button onClick={saveCharity}>אני רוצה לרשום תגמ"ח הזה😴😴</button>
    </tbody>
  )



}