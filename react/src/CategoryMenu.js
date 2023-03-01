
import axios from "axios";
import React, { useEffect } from "react";
import {useState} from "react";
import Charity from './Charity'



export default function ShowCategory(){

    
    const[categoryName,setCategoryName]=useState("");
    const[imageUrl,setImageUrl]=useState();
    const[array,setArray]=useState([]);
    const[filterName,setFilterName]=useState("");
    const[id,setId]=useState(0);

useEffect(()=>{

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



   let myarray=array.map((a)=>
   <>
   <h1>{a.categoryId}</h1>
   <button onClick={showCharity()}>{a.categoryName}</button>
 
    <h1> {a.imageUrl}</h1> 
    </>
)

   const showCharity=()=>{
   setId(a.categoryId);
   <Charity id={id}></Charity>
   }

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