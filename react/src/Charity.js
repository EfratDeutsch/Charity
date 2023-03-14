import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryMenu from './CategoryMenu';

const Charity = () => {
  const params = useParams();
  const categoryId = params.id;
  const [array, setArray] = useState([]);
  const[citiesArray,setCitiesArray]=useState([]);
  
  
  
  useEffect(() => {
    console.log(params.id);
    console.log("אני בצאריטי");
    GetCharitiesById();
    GetAllCities();

  }, [])

  const GetCharitiesById = async () => {
    try {
      const res = await axios.get(`https://localhost:44397/api/Charity/${categoryId}`)
       console.log("הגמחים" +res.data);
       setArray(res.data);
       console.log(array);


    }
    catch (error) {
      console.log(error);
    }
  }

const GetAllCities=async()=>{
try{
  const res2= await axios.get(`https://localhost:44397/api/City`)
  console.log(res2);
  setCitiesArray(res2);
}
catch(error){
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





      {/* <h1>charityId:{a.charityId}</h1>
      <h1>charityName:{a.charityName}</h1>
      <h1>categoryId:{a.categoryId}</h1>
      <h1>userId:{a.userId}</h1>
      <h1>cityId:{a.cityId}</h1>
      <h1>neighborhood:{a.neighborhood}</h1>
      <h1>charityDesc:{a.charityDesc}</h1>
      <h1>phone:{a.phone}</h1> */}
  </>
  )
//   const cities= citiesArray.map((a)=>
//   <tbody>
//  <h1>שם העיר</h1>
//   <h1>{a.CityName}</h1>
//   </tbody>
  
//   )

  return (
   <tbody>
      {myarray}
      <h1>חיפוש לפי ערים </h1>
      {/* {cities} */}
      {/* <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}
    </tbody>
   

  )
}




// import React from "react";
// import CategoryMenu from './CategoryMenu';

// export default function Charity(props){

// console.log(props.id);
//   //  alert("זה הפרופס"+ props.id+props+props.data+props.category);
//     alert(props)
//     console.log(props.id);
// return(
//     <tbody>  
//          <h1>קודם כל תרגעי את בצאריטי קומפוננט</h1>
//      <h1>{props.id} פרופסאידי</h1>
//      <h1>{props.data}פרופסדאטה</h1>

//     </tbody>

// )
// }
export default Charity;