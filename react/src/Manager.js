import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from "react"

export default function Manager(){
const[categoriesArray,setCategoriesArray]=useState([]);
   useEffect(()=>{
    getCategories()
   },[])

    const getCategories=async()=>{
        try{
            const res= await axios.get('https://localhost:44397/api/Category')
            setCategoriesArray(res.data);
            console.log(res.data);
        }
        catch (error) {
            console.log(error);
          }
    }

  
    return(
        <tbody>
        <h1>  מנהל מוסיף גמח</h1>
          <select>{
            categoriesArray.map((a, i) =>
          <option key={i} value={a.categoryId} >{a.categoryName}</option>
        )}
    </select>

        <input className="input" type="text" placeholder='שם גמח'></input>
        </tbody>
    )
}