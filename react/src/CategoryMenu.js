
import axios from "axios";
import React, { useEffect } from "react";
import {useState} from "react";
import Charity from './Charity'
import { useNavigate } from "react-router-dom";

export default function ShowCategory(){

    
    const[categoryName,setCategoryName]=useState("");
    const[imageUrl,setImageUrl]=useState();
    const[array,setArray]=useState([]);
    const[filterName,setFilterName]=useState("");
    const[id,setId]=useState(0);
    const navigate=useNavigate();




       
useEffect(()=>{
    console.log("a")

        try{
             axios.get(`https://localhost:44397/api/Category`)

            .then(response=>{
                console.log("im in getCategory");
                console.log(response.data);
                setArray(response.data);

            })

        }
        catch(error){
            console.log(error);
        }},[]);



   const myarray=array.map((a)=>
   <>
   <h1>{a.categoryId}</h1>
   <button onClick={()=> ab(a)}>{a.categoryName}</button>
    <h1> {a.imageUrl}</h1> 
    </>
)
const ab=(a)=>{
    
    // setId(a.categoryId);

    console.log(a.categoryId);
    console.log(id);
    if (a.categoryId!=0){
       Charity(a.categoryId);
      // navigate("/Charity");
        // <Charity id={a.categoryId}></Charity>
    // <Charity id={a.categoryId}/>
  navigate("/Charity", {id:a.categoryId});
   
}
   // navigate('/Charity',{id:id});
   // else(console.log("אני אידי אפס"));

}
// useEffect=(()=>{

//     console.log(id);  
//     navigate('/Charity',{id:id});
// },[id])

   const filter=async()=>{
    try{
        await axios.get(`https://localhost:44397/api/Category/GetFilter?name=${filterName}`)

        .then(response=>{
            console.log("hjkhjkhjk");
            console.log(response.data);
            setArray(response.data);
        })
    }

catch(error)
{
    console.log(error);
}   
}
     
     return(

      <tbody>
        {myarray}
   <input  className="input" type="text" placeholder=" כאן אפשר לחפש קטגוריה🔎" onChange={(e)=>setFilterName(e.target.value)}></input>
   <button onClick={filter}>יאללה חפש לי👈</button>

        </tbody> 
     )

}