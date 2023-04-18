import axios from 'axios';
import React, { useEffect } from 'react'
import { parsePath, useParams } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react"
import { TabMenu } from 'primereact/tabmenu';
import Menu from './Menu';

export default function LoanManager() {
    const params = useParams();
    const charityId = params.id;
    const [loans, setLoans] = useState([]);
    const [statusname, setStatusname] = useState("")
    const [items, setsetItemsLoans] = useState(["grtgr", "rwerwe"])
    const [my, setMy] = useState("")
    useEffect(() => {
        getLoans()

    }, [])

    const getLoans = async () => {
        try {
            const res = await axios.get(`https://localhost:44397/api/Loan/${charityId}`)
            console.log(res.data);

            setLoans(res.data)
            func(res.data)
            setMy("hihihi")


        }
        catch (error) {
            console.log(error);
        }

    }

    const func = async (ui) => {
        console.log(ui)

        ui.map((a) => {

            if (a.statusId == 1) {
                setStatusname("😃מצב טוב")
                console.log("הדפיס");
                console.log("status name" + statusname)
            }
            else if (a.statusId == 2) {
                setStatusname("😏מצב פחות טוב")
            }
            else if (a.statusId == 3) {
                setStatusname("😯מצב גרוע ")
            }

            else if (a.statusId == 4) {
                setStatusname("😣  מצב זוועה")
            }


            //a.statusId == 1 ? setStatusname("מצב טוב") : 2 ? setStatusname("מצב פחות טוב") : 3 ? setStatusname("מצב גרוע") : 4 ? setStatusname("מצב זוועה")
        }
        )
    }




    return (
        <tbody>
            <Menu></Menu>
            <DataTable value={loans} tableStyle={{ minWidth: '50rem' }}>
                <Column field="loanId" header="loan id"></Column>
                <Column field="itemName" header="item name"></Column>
                <Column field="statusId" header="Status Id"></Column>
                <Column field="loanDate" header="Loan Date"></Column>
                <Column field="returnDate" header="Return Date"></Column>
                <Column field="charityId" header="charity id"></Column>
                <Column body={statusname} header="status name"></Column>
                <h1>כאן מוסיפים עוד הלוואות</h1>

            </DataTable>
        </tbody>
    )
}

