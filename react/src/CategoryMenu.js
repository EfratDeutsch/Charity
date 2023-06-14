
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Charity from './Charity'
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
import './CategoryMenu.css'
import { ReactComponent as Illustaration3 } from "./illustration3.svg"
import { ReactComponent as Illustaration4 } from "./illustration4.svg"

import ButtonMenu from './ButtonMenu'

export default function ShowCategory() {


    const [categoryName, setCategoryName] = useState("");
    const [imageUrl, setImageUrl] = useState();
    const [array, setArray] = useState([]);
    const [filterName, setFilterName] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();



    useEffect(() => {
       
        console.log("a")

        try {
            axios.get(`https://localhost:44397/api/Category`)

                .then(response => {
                    console.log("im in getCategory");
                    console.log(response.data);
                    setArray(response.data);

                })

        }
        catch (error) {
            console.log(error);
        }
    }, []);



    // const myarray = array.map((a) =>
    //     <>

    //         <button id="categoryButton" onClick={() => ab(a)}>{a.categoryName}</button>

    //     </>
    // )

    const ab = (categoryId) => {

        console.log(categoryId);
        navigate(`/Charity/${categoryId}`);
        // <Charity categoryName={categoryName}></Charity>


    }

    const filter = async () => {
        try {
            await axios.get(`https://localhost:44397/api/Category/GetFilter?name=${filterName}`)

                .then(response => {
                    console.log("hjkhjkhjk");
                    console.log(response.data);
                    setArray(response.data);
                })
        }

        catch (error) {
            console.log(error);
        }
    }



    return (

        <tbody>
            <div id="categoryMenuBackGround">
                <Illustaration3></Illustaration3>
                <Illustaration4 id="illustration4"></Illustaration4>
            <div id="categoryTitle">גמחים שתמצאו אצלינו</div>
            {/* {myarray} */}
            {/* <input className="input" type="text" placeholder=" כאן אפשר לחפש קטגוריה🔎" onChange={(e) => setFilterName(e.target.value)}></input>
            <button onClick={filter}>יאללה חפש לי👈</button> */}
            <ButtonMenu onCategoryClick={ab}></ButtonMenu>
           </div>


        </tbody>

    )

}