import axios from 'axios';
import React, { useEffect } from 'react'
import { parsePath, useParams } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react"
import { TabMenu } from 'primereact/tabmenu';

export default function LoanManager() {
    const params = useParams();
    const charityId = params.id;
    const[loans,setLoans]=useState([])
    const[items,setsetItemsLoans]=useState(["grtgr","rwerwe"]) 
    useEffect(() => {
        getLoans()
    }, [])
    
    const getLoans = async () => {
        try {
            const res = await axios.get(`https://localhost:44397/api/Loan/${charityId}`)
            console.log(res.data);
            setLoans(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <tbody>
  

<h1>אונק טונק ת😎😂😊</h1>



            <h1>שלום שלום</h1>
            {charityId}

       <DataTable value={loans} tableStyle={{ minWidth: '50rem' }}>  
       <Column field="loanId" header="loan id"></Column>
        <Column field="itemName" header="item name"></Column>
        <Column field="statusId" header="Status Id"></Column>
        <Column field="loanDate" header="Loan Date"></Column>
        <Column field="returnDate" header="Return Date"></Column>
        <Column field="charityId" header="charity id"></Column>
      
   
      </DataTable>









        </tbody>
    )
}

