import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import axios from 'axios';

import { parsePath, useParams } from "react-router-dom";
import { TabMenu } from 'primereact/tabmenu';
import { InputSwitch } from 'primereact/inputswitch';

import { Button } from 'primereact/button';
import Menu from './Menu';



export default function RowEditingDemo() {
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
    const [statuses] = useState(['😃מצב טוב', '😏מצב פחות טוב', '😯מצב גרוע ', '😣  מצב זוועה']);
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

    const onRowEditComplete = (e) => {
        console.log("אני עורך עכשיו");
        console.log(e);
        console.log(e.newData.loanId)
        console.log(e.newData.borrowerEmail); 
        setNewLoan(e)
        
      let _loans = [...loans];
        let { newData, index } = e;

        _loans[index] = newData;

        setLoans(_loans);

    }

    const setNewLoan=async(e)=>{
    try{
        
        await axios.put(`https://localhost:44397/api/Loan/?id=${e.newData.loanId}`, e.newData)
        .then(res=>{
         console.log(res+"התשובה שלנו מהפונקציה הזאתי:");
        })
 }

  catch(error)
    {
    console.log(error);
    }

}

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={func(option)}>ןטוןטן</Tag>;
                }}
            />
        );
    };


    return (

        <tbody>

            <Menu></Menu>
        <div className="card p-fluid">
            <DataTable value={loans}  editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
            <Column field="loanId" header="loan id"></Column>
                <Column field="itemName" header="item name"  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="statusId" header="Status Id"  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="loanDate" header="Loan Date"  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="returnDate" header="Return Date"  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="charityId" header="charity id"  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="borrowerPhone" header="טלפון "  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="borrowerName" header="שם הלווה "  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="borrowerEmail" header="אימייל  "  editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="statusname" header="מצב החזרה  "  body={statusname} editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>

             {/* <Column body={statusname} header="מצב החזרה" editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column> */}
          
               
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>

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
        