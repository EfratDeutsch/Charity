import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import axios from 'axios';
import { parsePath, useParams, useRouteLoaderData } from "react-router-dom";
import { TabMenu } from 'primereact/tabmenu';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import Menu from './Menu';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { render, unstable_renderSubtreeIntoContainer } from 'react-dom';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { classNames } from 'primereact/utils';
import "./Loan.css";
import { ReactComponent as Prof } from "./profile.svg"
import { ReactComponent as ProfUser } from "./profUSer.svg"
import { ReactComponent as Lista } from "./lista.svg"
import { ReactComponent as Setting } from "./setting.svg"
import { ReactComponent as MenuPic } from "./menuPic.svg"
import { ReactComponent as Ill10 } from "./illustration10.svg"
import { ReactComponent as Ill11 } from "./illustration11.svg"
import { useLocation } from 'react-router-dom';
import { ReactComponent as SearchInput } from "./searchInput.svg"
import { ReactComponent as Return } from "./return.svg"
import { ReactComponent as IsLoaned } from "./isLoaned.svg"
import { useNavigate } from "react-router-dom";
// node_modules/primeflex/primeflex.css


export default function RowEditingDemo() {
    const params = useParams();
    // const charityId = params.id;
    const [charityId, setCharityId] = useState(params.id);
    const [loans, setLoans] = useState([]);
    const [items, setsetItemsLoans] = useState(["grtgr", "rwerwe"])
    const [my, setMy] = useState("")
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [itemName, setItemName] = useState("")
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [loanDate, setLoanDate] = useState(Date())
    const [statusId, setStatusId] = useState()
    const [bool, setBool] = useState(false)
    const [isReturned, setIsReturned] = useState("")
    const [tmp, setTmp] = useState([])
    const [renderBool, setRenderBool] = useState(false)
    const [boolButton, setBoolButton] = useState(false)
    const [notReturnedLoansArray, setNotReturnedLoansArray] = useState([])
    const statuses = ["עוד לא הוחזר", "הוחזר במצב פגום", "הוחזר חלקית", "אחר"]
    const NewLoan = { CharityId: charityId, LoanDate: new Date(), ReturnDate: null, BorrowerName: userName, BorrowerPhone: userPhone, BorrowerEmail: userEmail, StatusId: 1, ItemName: itemName }
    const [statusname, setStatusname] = useState('')
    const [anotherBool, setAnotherBool] = useState(false)
    const [lala, setLala] = useState(false)
    const { state } = useLocation();
    const [charity, setCharity] = useState("")
    const [isAddLaon, setIsAddLaon] = useState(false)
    const [ba, setba] = useState(false)
    const [value, setValue] = useState("")
    const { firstName, lastName, charities } = state;
    const [h, setH] = useState(<Return></Return>)
    const [o, setO] = useState("dasdsdas")
    const [errors, setErrors] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        itemName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        userPhone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        borrowerName: { value: null, matchMode: FilterMatchMode.CONTAINS },

    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const tableCustomStyles = {
        headRow: {
            style: {
                color: '#223336',
                backgroundColor: '#e7eef0'
            },
        },
        rows: {
            style: {
                color: "#e7eeff",
                backgroundColor: "#e7eef0"
            },
            stripedStyle: {
                backgroundColor: "#e7eeff"
            }
        }
    }

    useEffect(() => {
        getLoans()
        console.log("r " + statusname);
        console.log(firstName + "יאללה לעבודה");
        console.log(lastName + "יאללה לעבודה");
        console.log(charities[1].charityId + "עכשיו מראים");
        hey();
    }, [])

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const getLoans = async () => {

        try {
            console.log(charityId);
            const res = await axios.get(`https://localhost:44397/api/Loan/${charityId}`)
            console.log(charityId, "charityId");
            console.log(res.data, "data");
            setLoans(res.data)
            setTmp(res.data)
            func(res.data)

            setMy("hihihi")


        }
        catch (error) {
            console.log(error);
        }

    }

    const func = async (ui) => {

        console.log("מגיע מתוך func כשהסטטוס הוא:" + ui)

        ui.map((a) => {

            if (a.statusId == 1) {
                a.statusname = statuses[0]
                //setStatusname(statuses[0])
                console.log("הדפיס");
                console.log("status name")
                console.log({ statusname })
            }
            else if (a.statusId == 2) {
                a.statusname = statuses[1]
                let d = statuses[1];
                //setStatusname(d);
                console.log("הדפיס");
                console.log("status name")
                console.log({ statusname });
            }
            else if (a.statusId == 3) {
                a.statusname = statuses[2]
                //setStatusname(statuses[2])
                console.log("הדפיס");
                console.log("status name")
                console.log(statusname);
            }

            else if (a.statusId == 4) {
                a.statusname = statuses[3]
                //setStatusname(statuses[3])
                console.log("הדפיס");
                console.log("status name")
                console.log(statusname);
            }
            console.log(a.statusname)

            //a.statusId == 1 ? setStatusname("מצב טוב") : 2 ? setStatusname("מצב פחות טוב") : 3 ? setStatusname("מצב גרוע") : 4 ? setStatusname("מצב זוועה")
        }
        )
    }

    const retroFunc = async (e) => {
        console.log(e);
        if (e.statusname == "עוד לא הוחזר") {
            e.statusId = 1
            setStatusId(1)
            console.log("הוחזר במצב טוב")
        }
        else if (e.statusname == "הוחזר במצב פגום") {
            e.statusId = 2
            setStatusId(2)
            console.log("הוחזר במצב פגום ")
        }
        else if (e.statusname == "הוחזר חלקית") {
            e.statusId = 3
            setStatusId(3)
            console.log("הוחזר חלקית")
        }
        else if (e.statusname == "אחר") {
            e.statusId = 3
            setStatusId(4)
            console.log(" אחר ")
        }

    }

    const saveLoan = async () => {


        await axios.post(`https://localhost:44397/api/Loan`, NewLoan)

            .then(res => {

                console.log((res.data));
                alert("הלוואתו של" + res.data.borrowerName + "נרשמה בהצלחה");
                getLoans()
                console.log("הצליח");
            }).catch(() => {
                alert("לא הצליח")
            }).finally(() => {
                setIsAddLaon(false)
            })


    }

    const onRowEditComplete = (e) => {
        console.log("אני עורך עכשיו");
        retroFunc(e.newData)
        console.log(e);
        console.log(e.newData.loanId)
        console.log(e.newData.borrowerEmail)
        console.log(e.newData.loanDate)
        console.log(e.newData.statusId)
        setNewLoan(e.newData)
        let _loans = [...loans]
        let { newData, index } = e
        _loans[index] = newData
        setLoans(_loans)

    }

    const setNewLoan = async (e) => {
        try {

            console.log(e)
            console.log(e.isReturned + "מלכי יפרח")
            await axios.put(`https://localhost:44397/api/Loan/${e.loanId}`, e)
                .then(res => {
                    console.log("jjj");
                    console.log(res + "התשובה שלנו מהפונקציה הזאתי:")
                    setIsReturned(!isReturned)
                    setAnotherBool(!anotherBool)


                })
        }

        catch (error) {
            console.log("כאן יש ארור" + error);
        }

    }

    const textEditor = (options) => {

        return <InputText type="text" value={options.value}  onChange={(e) => options.editorCallback(e.target.value)} />;
    }
   
    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}

                placeholder="Select a Status"
                itemTemplate=
                {(option) => {
                    return <Tag value={option} severity={func(option)}></Tag>;
                }}
            />
        );
    };
    //  let isReturned={ value: null}
    const returndFunction = (rowData) => {

        return (

            <div className="card">
                <div className="p-field-checkbox p-m-0">
                    {!rowData.isReturned && <IsLoaned onClick={() => {
                        rowData.isReturned = true;

                        // console.log(isReturned);
                        // console.log(rowData+"rowData lalal");
                        console.log(rowData.isReturned + "rowdata is returnd");
                        setNewLoan(rowData)
                        setAnotherBool(!anotherBool)

                        // put setIsReturned to true when id=rowData.id
                    }} tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />}
                    {rowData.isReturned && <Return onClick={() => {
                        alert("הלוואה זו הוחזרה. אין אפשרות לעדכן אותה☹")
                        console.log("שיהנ בשסת תענוג");


                        // put setIsReturned to true when id=rowData.id
                    }} />}
                    {/* <TriStateCheckbox value={rowData.isReturned} />
                        <label>{String(rowData.isReturned)}</label> */}
                </div>
            </div>


        )
    }
    const dateFormat = (rowData) => {
        return (
            <>
                {new Date(rowData.loanDate).toLocaleDateString()}
            </>)
    }
    const notReturnedLoans = () => {

        (setBool(!bool))
        if (!boolButton)

            return (<>
                <Button onClick={notReturnedButton}>הצג רק הלוואות שלא הוחזרו</Button>
            </>
            )
        else if (boolButton)
            return (<Button onClick={retroNotReturnFunction}>הצג את כל ההלוואות</Button>)

    }
    const retroNotReturnFunction = () => {

        setAnotherBool(!setAnotherBool)
        setLoans(tmp)
        setBoolButton(false)


    }
    const notReturnedButton = () => {

        setAnotherBool(!anotherBool)
        setBoolButton(true)
        let _allLoans = [...loans]
        setNotReturnedLoansArray([])
        let _notReturnedLoans = [...notReturnedLoansArray]
        let j = 0;
        for (let i = 0; i < _allLoans.length; i++) {
            if (_allLoans[i].isReturned == false || _allLoans[i].isReturned == null) {
                _notReturnedLoans[j] = _allLoans[i];
                j++
            }
        }
        console.log("ppp");
        console.log(_notReturnedLoans);
        setNotReturnedLoansArray(_notReturnedLoans)
        setLoans(_notReturnedLoans)
        console.log("lll");
        console.log(notReturnedLoansArray);


    }
    const selectedCharity = async (e) => {
        console.log(e.value + "selected");
        setCharity(e.value)
        setCharityId(e.value)
    }
    useEffect(() => {
        getLoans();
    }, [charity])

    const addLoan = () => {
        setIsAddLaon(true)

    }

    const hey = () => {
        return (<h1>akuo</h1>)
    }
    const passToManger=()=>{
        navigate(`/Manager`)
      }
      const backHome=()=>{
        navigate(`/Home`)
      }
    return (

        <tbody>


            <button id="ui" tooltip="למה אתה לא כותב ךי תטולטיפ" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} onClick={addLoan}>הלוואה חדשה</button>

            <div className="card flex justify-content-center">

                <InputText value=" חיפוש" id="searchInput" ></InputText>

            </div>
            <div id="loanerCorner">
                <Prof id="prof"><ProfUser></ProfUser></Prof>
                <div id="liner"></div>
                <div id="managerName">{firstName}   {lastName}</div>

                <Dropdown id="dropDownInLoan" value={charity} options={charities} optionLabel="charityName" optionValue="charityId" onChange={(e) => selectedCharity(e)} editable placeholder="בחר גמח" className="w-full md:w-14rem " />
                <div id="actions">פעולות</div>
                <Lista id="lista"></Lista>
                <Setting id="setting" onClick={passToManger}></Setting>
                <MenuPic id="menupic" onClick={backHome}></MenuPic>
                <Ill10 id="ill10"></Ill10>
                <Ill11 id="ill11"></Ill11>
            </div>
            <a id="dairyCaption">יומן הלוואות</a>
            <div id="loansTabls">
                <div className="card p-fluid">
                    <div header={notReturnedLoans}>{notReturnedLoans}</div>
                    <DataTable className='loansTableDataTable' value={loans} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} stripedRows tableStyle={{ minWidth: '50rem' }} filters={filters} paginator rows={7}>
                        <Column id="oo" header={notReturnedLoans}></Column>
                        <Column className='text-right' rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column className='text-right' field="isReturned" body={returndFunction} header="סמן כפריט שהוחזר" style={{ width: '20%', color: "#12005B" }}></Column>
                        <Column className='text-right' field="statusname" header="מצב החזרה  " body={statusname} editor={(options) => statusEditor(options)} style={{ width: '20%', color: "#12005B" }}></Column>
                        <Column className='text-right' field="borrowerPhone" header="טלפון " editor={(options) => textEditor(options)} style={{ width: '20%', color: "#12005B" }}></Column>
                        <Column className='text-right' field="borrowerEmail" header="אימייל  " editor={(options) => textEditor(options)} style={{ width: '20%', color: "#12005B" }}></Column>
                        <Column className='text-right' field="loanDate" body={dateFormat} filter filterPlaceholder="Search by name" header="תאריך הלוואה " editor={(options) => textEditor(options)} style={{ width: '20%', color: "#12005B" }}></Column>
                        <Column className='text-right' field="borrowerName" header="שם הלווה " sortable filterPlaceholder="Search by name" editor={(options) => textEditor(options)} style={{ width: '80%', color: "#12005B" }}></Column>
                        <Column className='text-right' field="itemName" header="שם פריט" filterField="itemName" filter sortable filterPlaceholder="חיפוש על פי שם הפרטי" editor={(options) => textEditor(options)} style={{ width: '30%', color: "#12005B" }} />

                        {/* <Column body={statusname} header="מצב החזרה" editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column> */}



                    </DataTable>

                </div>

            </div>
            {isAddLaon && <div id="addLoanDiv">
                <h1 id="addLoancaapt">כאן מוסיפים עוד הלוואות</h1>
                <div style={{ width: "300px" }}>
                    <div className="card flex flex-column md:flex-row gap-3">
                        <br></br><br></br>
                        <div className="p-inputgroup flex-1">
                            <br></br><br></br>

                            <InputText placeholder="שם מוצר" onChange={(e) => setItemName(e.target.value)} />   <br></br><br></br>

                        </div>
                        <br></br><br></br>
                        <div className="p-inputgroup flex-1">   <br></br><br></br>
                            <br></br><br></br>
                            <InputText placeholder="שם הלווה" onChange={(e) => setUserName(e.target.value)} />   <br></br><br></br>

                        </div>

                        <div className="p-inputgroup flex-1">   <br></br><br></br>
                            <br></br><br></br>
                            <InputText placeholder="טלפון" onChange={(e) => setUserPhone(e.target.value)} />
                        </div>

                        <div className="p-inputgroup flex-1">
                            <br></br><br></br>
                            <InputText placeholder="אימייל " onChange={(e) => setUserEmail(e.target.value)} />
                        </div>
                    </div>
                </div>   <br></br><br></br>    <br></br><br></br>    <br></br><br></br>    <br></br><br></br>
                <div className="card flex flex-wrap justify-content-center gap-3">   <br></br><br></br>
                    <Button label="שמור" icon="pi pi-check" loading={loading} onClick={saveLoan} />   <br></br><br></br>
                </div>
            </div>}


        </tbody>
    )
}
