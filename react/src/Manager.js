import { isClickableInput } from '@testing-library/user-event/dist/utils';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
export default function Manager() {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);
  const [cityNum, setCityNum] = useState(Number);
  const [categoryId, setCategoryId] = useState(Number);
  const [charityName, setCharityName] = useState("");
  const [charityDesc, setCharityDesc] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState(0)
  const [charities, setCharities] = useState([])
  const [userFirstName, setUserFirstName] = useState("")
  const [userLastName, setUserLastName] = useState("")
  const [charityId,setCharityId]=useState(Number)
  const navigate = useNavigate();


  const getUsersCharities = async () => {
    try {
      if (userId == 0)
        throw Error("not fount")
      console.log("in getuser with userid ", userId)
      const res = await axios.get(`https://localhost:44397/api/Charity/${userId}`);
      setCharities(res.data)
      console.log(charities);
    }
    catch (error) {
      console.log(error);
    }
  }

  const GetDataFromSession = async () => {
    const obj = await JSON.parse(sessionStorage.getItem("User"));
    setUserId(obj.userId)
    //setUserName(obj.userName)
    console.log(obj.firstName);
    setUserFirstName(obj.firstName)
    setUserLastName(obj.lastName)


  }
  useEffect(() => {
    getUsersCharities();
  }, [userId])
  useEffect(() => {
    GetDataFromSession();
    getCategories()
    GetAllCities()
  }, [])


  const NewCharity = { CharityName: charityName, CategoryId: categoryId, UserId: userId, CityId: cityNum, Neighborhood: neighborhood, CharityDesc: charityDesc, Phone: phone }

  const saveCharity = async () => {
    try {
      await axios.post('https://localhost:44397/api/Charity', NewCharity)
        .then(res => {
          getUsersCharities()
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




  const changeDetails = async () => {
    alert("ואז מה?")
  }




const LoanManager=(rowData)=>{
 
  setCharityId(rowData.charityId)
  navigate(`/Loan/${rowData.charityId}`);
  
}
  const butttonFunction = (rowData) => {
     
   return(
    <>
<button onClick={()=>LoanManager(rowData)} >ניהול הלוואות </button>
    </>
   )
  }
  return (

    <tbody>
        <Menu></Menu>
{/* 
{charityId?<>{charityId}</>:<></>} */}

      <h1>נירו יאיר ויזרח ויציץ ויפרח {userFirstName} {userLastName} שלום למנהל הנכבד והמהולל כמר </h1>
      <button onClick={changeDetails}>!נו באמת, בא לי לשנות ת'פרטים</button>
      <DataTable value={charities} tableStyle={{ minWidth: '50rem' }}>
        <Column field="charityName" header="name"></Column>
        <Column field="charityDesc" header="description"></Column>
        <Column field="phone" header="phone"></Column>
        <Column field="neighborhood" header="neighborhood"></Column>
        <Column field="userId" header="userId"></Column>
        <Column field="charityId" header="charity id"></Column>
        <Column body={butttonFunction}></Column>
      </DataTable>


      <h1>  מנהל מוסיף גמח</h1>

      {categoryComboBox}
      <input className="input" type="text" placeholder='שם גמח' onChange={(e) => setCharityName(e.target.value)}></input>
      {cityComboBox}
      <input className="input" type="text" placeholder='שכונה' onChange={(e) => setNeighborhood(e.target.value)}></input>
      <input className="input" type="text" placeholder='תאור' onChange={(e) => setCharityDesc(e.target.value)}></input>
      <input className="input" type="text" placeholder='טלפון' onChange={(e) => setPhone(e.target.value)}></input>
      <button onClick={saveCharity}>אני רוצה לרשום תגמ"ח הזה😴😴</button>
    </tbody>
  )

}

