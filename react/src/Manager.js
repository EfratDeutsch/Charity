import { isClickableInput } from '@testing-library/user-event/dist/utils';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
import "./Manager.css"
import { ReactComponent as Prof } from "./profile.svg"
import { ReactComponent as ProfUser } from "./profUSer.svg"
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
  const [userEmail, setUserEmail] = useState("")
  const [charityId, setCharityId] = useState(Number)
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
    console.log(obj);
    setUserId(obj.userId)
    //setUserName(obj.userName)
    console.log(obj.firstName);
    setUserFirstName(obj.firstName)
    setUserLastName(obj.lastName)
    setUserEmail(obj.email)


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
          alert("תודה" + " " + userFirstName + ", " + "הגמח נרשם בהצלחה")
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
    <select id="selectCity" onChange={(e) => setCityNum(e.target.value)}>
      {
        citiesArray.map((a, i) =>
          <option id="optionCity" key={i} value={a.cityId} >{a.cityName}</option>
        )

      }</select>

  const categoryComboBox =
    <select id="selectCategory" onChange={(e) => setCategoryId(e.target.value)}>
      {
        categoriesArray.map((a, i) =>
          <option id="optionCategory" key={i} value={a.categoryId} >{a.categoryName}</option>
        )}
    </select>




  const changeDetails = async () => {
    alert("ואז מה?")
  }


  const deleteCharity = async (rowData) => {

    try {
      const res3 = await fetch(`https://localhost:44397/api/Charity/${rowData.charityId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res3.ok) {
        throw new Error("Failed to delete charity");
      }

      alert(`גמח בשם  ${rowData.charityName} נמחק בהצלחה`);

      getUsersCharities()
    }
    catch (error) {
      console.error(error);
      alert("An error occurred while deleting the charity");
    }
  }


  const LoanManager = (rowData) => {

    setCharityId(rowData.charityId)
    navigate(`/Loan/${rowData.charityId}`, { state: { firstName: userFirstName, lastName: userLastName, charities: charities } });

    //navigate(`/EditBook`, { state: { bookDTO: bookDTO, book: props.book, author: props.author, category: props.category, edition: props.edition, shulId: bookDTO.shulId }

  }
  const butttonFunction = (rowData) => {

    return (
      <>
        <button onClick={() => LoanManager(rowData)} >ניהול הלוואות </button>
        <button onClick={() => deleteCharity(rowData)} > סגירת גמח ומחיקתו לאלתר </button>
      </>
    )
  }


  return (

    <tbody>
      <div id="divSagol">
        <a id="sagolcap">הגדרות איזור אישי</a>

        <div id="sagolsqorel"><a id="capit">{userFirstName}  {userLastName}</a><Prof id="prof" ><ProfUser ></ProfUser></Prof>
        </div>
      </div>
      {/* 
{charityId?<>{charityId}</>:<></>} */}



     
      <button onClick={changeDetails}>!נו באמת, בא לי לשנות ת'פרטים</button>
      <DataTable value={charities} tableStyle={{ minWidth: '50rem' }} paginator rows={4}>
        <Column field="charityName" header="name"></Column>
        <Column field="charityDesc" header="description"></Column>
        <Column field="phone" header="phone"></Column>
        <Column field="neighborhood" header="neighborhood"></Column>
        <Column field="userId" header="userId"></Column>
        <Column field="charityId" header="charity id"></Column>
        <Column body={butttonFunction} ></Column>

      </DataTable>


      <a id='addCharityCaption'>מוסיפים גמח:)</a>
      <a id="anothercaptionLetsGo">הזן את פרטי הגמ"ח שלך</a>
      <a id="cap1">שם הגמח</a>

      <a id="cap3">עיר</a>
      <a id="cap4">טלפון</a>
      <a id="cap5">רחוב ומספר בית</a>
      <a id="cap7">מה אפשר למצוא בגמח שלך </a>
      <a id="cap6">קטגוריה</a>
      <div id="categorycom"> {categoryComboBox}</div>
      <input id="adcharityNameinput" className="input" type="text" placeholder='שם גמח' onChange={(e) => setCharityName(e.target.value)}></input>
      <div id="cityComboBox">{cityComboBox}</div>
      <input id="adNeigborhoodNameinput" className="input" type="text" placeholder='לדוג טללים 23/8' onChange={(e) => setNeighborhood(e.target.value)}></input>
      <input id="adddescriptionNameinput" className="input" type="text" placeholder='לדוג מוצצים בקבוקי תינוק עריסות' onChange={(e) => setCharityDesc(e.target.value)}></input>
      <input id="addphoneNameinput" className="input" type="text" placeholder='טלפון' onChange={(e) => setPhone(e.target.value)}></input>
      <button id="charitySave" onClick={saveCharity}><a id="charitySaveCaption">שמור</a></button>
    </tbody>
  )

}

