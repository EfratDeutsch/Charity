import axios from "axios";
import React, { useEffect, useState } from "react";
import { parsePath, useParams } from "react-router-dom";
import CategoryMenu from './CategoryMenu';

const Charity = () => {
  const params = useParams();
  const categoryId = params.id;
  const [array, setArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);

  const[mapNewCharityArray,setMapNewCharityArray]=useState([])
 
  const[baseArray,setBaseArray]=useState([])


  useEffect(() => {
    console.log(params.id);
    console.log("אני בצאריטי");
    GetCharitiesById();
    GetAllCities();

  }, [])

  const GetCharitiesById = async () => {
    try {
      const res = await axios.get(`https://localhost:44397/api/Charity/${categoryId}`)
      console.log("הגמחים" + res.data);
      setBaseArray(res.data);
      setArray(res.data);
      console.log(baseArray);


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


  const myarray = array.map((a) =>
    <>

      <table>
        <tr>
          <th >charityId</th>
          <th>charityName</th>
          <th>categoryId</th>
          <th>userId</th>
          <th>cityId</th>
          <th>neighborhood</th>
          <th>charityDesc</th>

          <th>phone</th>
        </tr>

        <tr>
          <td>{a.charityId}</td>
          <td>{a.charityName}</td>
          <td>{a.categoryId}</td>
          <td>{a.userId}</td>
          <td>{a.cityId}</td>
          <td>{a.neighborhood}|</td>
          <td>{a.charityDesc}</td>|
          <td>{a.phone}</td>
        </tr>

      </table>


    </>
  )
 
  const Answer =
    <select onChange={(e) => getCharitiesByCity(e.target.value)}>
      {
        citiesArray.map((a, i) =>
          <option key={i} value={a.cityId} >{a.cityName}</option>
        )

      }</select>

const getCharitiesByCity = (e) => {
console.log(e)
console.log(array);
const newArr=baseArray.filter(a=> a.cityId==e)
console.log("אררי ובתוכו גמחים מפולטרים");
console.log(newArr);

setArray(newArr)
console.log("אררי הראשי(של כל הגמחים) ובתוכו גמחים מפולטרים");
console.log(array);
}
 

useEffect(() => {
    console.log(Answer)
  }, [Answer])



  return (
    <tbody>
      {myarray}

      <h1>סינון לפי ערים </h1>
      {Answer}
      {mapNewCharityArray}
    </tbody>

  )
}

export default Charity;