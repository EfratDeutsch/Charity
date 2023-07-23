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
import { Dropdown } from 'primereact/dropdown';
import { ReactComponent as Ill10 } from "./illustration10.svg"
import { ReactComponent as Ill11 } from "./illustration11.svg"
import { ReactComponent as Lista } from "./lista.svg"
import { ReactComponent as Setting } from "./setting.svg"
// import {TextField} from "@mui/material";
import { ReactComponent as MenuPic } from "./menuPic.svg"
import "./Loan.css";
import { InputText } from 'primereact/inputtext';

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
  const [userPassword, setUserPassword] = useState("")
  const [userFirstName, setUserFirstName] = useState("")
  const [userLastName, setUserLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [charityId, setCharityId] = useState(Number)
  const [charity, setCharity] = useState("")
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [flag, setFlag] = useState(false)
  const [phoneFlag, setPhoneFlag] = useState(false)
  const [isInputTextNameNeig, setIsInputTextNameNeig] = useState(false)
  const [isPhoneValidate, setIsPhoneValidate] = useState(false)
  const [isPhoneLengthOk, setIsPhoneLengthOk] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isInputTextNameDesc, setIsInputTextNameDesc] = useState(false)
  const [isInputTextName, setIsInputTextName] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [cityNumPut, setCityNumPut] = useState(Number);
  const [passwordPut, setPasswordPut] = useState("");
  const [userEmailPut, setUserEmailPut] = useState("");
  //const { firstName, lastName, charities } = state;


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
      if (!isInputTextNameNeig && !isInputTextName && !isInputTextNameDesc && !isPhoneLengthOk) {
        await axios.post('https://localhost:44397/api/Charity', NewCharity)
          .then(res => {
            alert("תודה" + " " + userFirstName + ", " + "הגמח נרשם בהצלחה")
            getUsersCharities()
          })
      }
      else (alert("שים לב שהפרטים שהזנת תקינים"))
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
  const cityComboBoxPut =
    <select id="selectCity" onChange={(e) => setCityNumPut(e.target.value)}>
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
    const NewUser = { UserId:userId, UserName: userEmailPut, Password: passwordPut, FirstName: userFirstName, LastName: userLastName };

    try {
      await axios.put(`https://localhost:44397/api/User/${userId}`, NewUser)

        .then(alert('פרטים שונו בהצלחה'))


    }
    catch (err) {
      console.log(err);
    }
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

    setCharityId(rowData.value)
    navigate(`/Loan/${rowData.value}`, { state: { firstName: userFirstName, lastName: userLastName, charities: charities } });

    //navigate(`/EditBook`, { state: { bookDTO: bookDTO, book: props.book, author: props.author, category: props.category, edition: props.edition, shulId: bookDTO.shulId }

  }
  const validateCharityName = (inputContex) => {
    if (!inputContex) {
      setIsInputTextName(true)
    }
    else setIsInputTextName(false)
  }
  const butttonFunction = (rowData) => {

    return (
      <>
        <button onClick={() => LoanManager(rowData)} >ניהול הלוואות </button>
        <button onClick={() => deleteCharity(rowData)} > סגירת גמח ומחיקתו לאלתר </button>
      </>
    )
  }

  const validationFunctionNeigborhood = (inputContex) => {



    if (!inputContex) {
      setIsInputTextNameNeig(true)

    }
    else (setIsInputTextNameNeig(false))


  }
  const validationFunctionPhone = (inputContex) => {

    const cond = /^[0-9]+$/;
    if (!cond.test(inputContex)) {
      setIsPhoneValidate(true)
    }
    else if (inputContex.length < 10) {
      setIsPhoneLengthOk(true)
    }
    else {
      setIsPhoneValidate(false)
      setIsPhoneLengthOk(false)
    }


  }
  const validationFunctionDesc = (inputContex) => {

    if (!inputContex) {
      setIsInputTextNameDesc(true)

    }
    else (setIsInputTextNameDesc(false))
  }
  const validationFunctionEmail = (inputContex) => {
    debugger
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputContex))
      setIsValidEmail(true)
    else {
      debugger
      setIsValidEmail(false)
    }
  }

  const validationFuntionPassword = (inputContex) => {
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputContex))
    if (inputContex < 8)
      setIsValidPassword(true)
    else (setIsValidPassword(false))
  }

  const backHome = () => {
    navigate(`/Home`)
  }
  const AddLoanPage = () => {
//   navigate(`/Loan/0`, { state: { firstName: userFirstName, lastName: userLastName, charities: userCharities } });
  }

  return (

    <tbody>
      <div>{isInputTextNameNeig ? (<small id="smallNeig">זהו שדה חובה</small>) : <></>}</div>
      <div>{isInputTextName ? (<small id="smallName">זהו שדה חובה</small>) : <></>}</div>
      <div>{isInputTextNameDesc ? (<small id="smallDesc">זהו שדה חובה</small>) : <></>}</div>
      <div>{isPhoneLengthOk ? (<small id="smallPhoneToShort">מספר הטלפון קצר מידי</small>) : <></>}</div>
      <div>{isPhoneValidate ? (<small id="smallPhone">מספר הטלפון אינו תקין</small>) : <></>}</div>

      <div id="loanerCorner">
        <Prof id="prof"><ProfUser></ProfUser></Prof>
        <div id="liner"></div>
        <div id="managerName">{userFirstName}   {userLastName}</div>

        <Dropdown id="dropDownInLoan" value={charity} options={charities} optionLabel="charityName" optionValue="charityId" onChange={(e) => LoanManager(e)} editable placeholder="בחר גמח" className="w-full md:w-14rem " />
        <div id="actions">פעולות</div>
        <Lista id="lista"></Lista>
        <Setting id="setting" onClick={AddLoanPage} ></Setting>
        <MenuPic id="menupic" onClick={backHome}></MenuPic>
        <Ill10 id="ill10"></Ill10>
        <Ill11 id="ill11"></Ill11>
      </div>
      <div id="divSagol">
        <a id="sagolcap">הגדרות איזור אישי</a>
        {isValidEmail ? <small id="smallEmail">המייל הזה לא תקין</small> : ""}{isValidPassword ? (<small id="smallPassword">סיסמא צריכה להכיל לפחות שמונה תווים</small>) : <></>}
        <div id="sagolsqorel"><a id="capit">{userFirstName}  {userLastName}</a><Prof id="prof" ><ProfUser ></ProfUser></Prof>
          <a id="setCap1">אימייל</a>
          <input id="setEmailAdress" className="input" type="text" placeholder={userEmail} onBlur={(e) => validationFunctionEmail(e.target.value)} onChange={(e) => setUserEmailPut(e.target.value)}></input>
          <a id="setCap2">סיסמא</a>
          <input id="setNeigborhood" className="input" type="text" placeholder=' ' onBlur={(e) => validationFuntionPassword(e.target.value)} onChange={(e) => setPasswordPut(e.target.value)}></input>
          {/* <a id="setCap3">עיר</a> */}

          <button id="saveDetailsChanges" onClick={changeDetails}><a id="charitySaveCaption2">שמור</a> </button>
        </div>
      </div>
      {/* 
{charityId?<>{charityId}</>:<></>} */}





      {/* <DataTable value={charities} tableStyle={{ minWidth: '50rem' }} paginator rows={4}>
        <Column field="charityName" header="name"></Column>
        <Column field="charityDesc" header="description"></Column>
        <Column field="phone" header="phone"></Column>
        <Column field="neighborhood" header="neighborhood"></Column>
        <Column field="userId" header="userId"></Column>
        <Column field="charityId" header="charity id"></Column>
        <Column body={butttonFunction} ></Column>

      </DataTable> */}


      <a id='addCharityCaption'>מוסיפים גמח:)</a>
      <a id="anothercaptionLetsGo">הזן את פרטי הגמ"ח שלך</a>
      <a id="cap1">שם הגמח</a>

      <a id="cap3">עיר</a>
      <a id="cap4">טלפון</a>
      <a id="cap5">רחוב ומספר בית</a>
      <a id="cap7">מה אפשר למצוא בגמח שלך </a>
      <a id="cap6">קטגוריה</a>
      <div id="categorycom"> {categoryComboBox}</div>

      <input id="adcharityNameinput"
        className="input"
        type="text"
        placeholder='שם גמח'
        onBlur={(e) => validateCharityName(e.target.value, "string")}
        onChange={(e) => setCharityName(e.target.value)}
      ></input>
      <div id="cityComboBox">{cityComboBox}</div>
      <input id="adNeigborhoodNameinput" className="input" type="text" placeholder='לדוג טללים 23/8' onBlur={(e) => validationFunctionNeigborhood(e.target.value, "string")} onChange={(e) => setNeighborhood(e.target.value)}></input>
      <input id="adddescriptionNameinput" className="input" type="text" placeholder='לדוג מוצצים בקבוקי תינוק עריסות' onBlur={(e) => validationFunctionDesc(e.target.value, "string")} onChange={(e) => setCharityDesc(e.target.value)}></input>
      <input id="addphoneNameinput" className="input" type="text" placeholder='טלפון' onBlur={(e) => validationFunctionPhone(e.target.value, "phone")} onChange={(e) => setPhone(e.target.value)}></input>
      <button id="charitySave" onClick={saveCharity}><a id="charitySaveCaption">שמור</a></button>
    </tbody >
  )

}

