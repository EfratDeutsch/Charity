import axios from 'axios';
import React, { useEffect } from 'react'
import { parsePath, useParams } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react"
import { TabMenu } from 'primereact/tabmenu';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import Menu from './Menu';

export default function LoanManager() {
    const params = useParams();
    const charityId = params.id;
    const [loans, setLoans] = useState([]);
    const [statusname, setStatusname] = useState("")
    const [items, setsetItemsLoans] = useState(["grtgr", "rwerwe"])
    const [my, setMy] = useState("")
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [itemName, setItemName] = useState("")
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [loanDate, setLoanDate] = useState(Date())
    // const [returnDate, setReturnDate] = useState(Date())
    //var date = new Date(this.props.date); 
   // var elapsed = date.getTime();
    const NewLoan = { CharityId: charityId, LoanDate: new Date(), ReturnDate: null, BorrowerName: userName, BorrowerPhone: userPhone, BorrowerEmail: userEmail, StatusId: 1, ItemName: itemName }



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

    const saveLoan = async () => {

        try {
            await axios.post(`https://localhost:44397/api/Loan`, NewLoan)
                
                 .then(res => {
        
               
                   console.log((res.data));
                    alert("הלוואתו של"+res.data.borrowerName+"נרשמה בהצלחה")
                })
            console.log("הצליח");





        }

        catch {
            alert("לא הצליח")
        }








    }
    const botton = (rowData) => {
     
        return(
         <>
     <button onClick={()=>setLoan(rowData)} > עריכה </button>
         </>
        )
       }

       const setLoan=async()=>{

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
                <Column field="borrowerPhone" header="טלפון "></Column>
                <Column field="borrowerName" header="שם הלווה "></Column>
                <Column field="borrowerEmail" header="אימייל  "></Column>
                <Column body={statusname} header="מצב החזרה"></Column>
                <Column body={botton} header="עריכה"></Column> 
                {/* <Column body={checked} header="האם הוחזר">
                <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /> </div></Column> */}

            </DataTable>

            <h1>כאן מוסיפים עוד הלוואות</h1>
            <div style={{ width: "300px" }}>

                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="item name" onChange={(e) => setItemName(e.target.value)} />
                    </div>





                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Phone" onChange={(e) => setUserPhone(e.target.value)} />
                    </div>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Email " onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
               




                </div>
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Submit" icon="pi pi-check" loading={loading} onClick={saveLoan} />
            </div>

        </tbody>
    )
}

