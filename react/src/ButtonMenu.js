import React from "react";
import { ReactComponent as Table } from "./table.svg"
import { ReactComponent as Medicine } from "./Medicine.svg"
import { ReactComponent as Tools } from "./tools.svg"
import "./CategoryMenu.css"

export default function ButtonMenu({ onCategoryClick }) {

    return (
    //    <>
       
    //     <button id="buttonStyle" onClick={() => onCategoryClick(1)}><Table/></button>
    //     <h1 id="describeTitle">שולחנות</h1>
    //     <button id="buttonStyle" onClick={() => onCategoryClick(2)}><Medicine/></button>
    //     <h1 id="describeTitle">תרופות</h1>
    //     <button id="buttonStyle" onClick={() => onCategoryClick(3)}><Tools/></button>
    //     <h1 id="describeTitle">כלי עבודה</h1>
    //     <button id="buttonStyle" onClick={() => onCategoryClick(4)}><Table/></button><br></br>
    //     <h1 id="describeTitle">כלי עבודה</h1>
    //     <button id="buttonStyle2" onClick={() => onCategoryClick(5)}><Table/></button>
    //     <h1 id="describeTitle">כלי עבודה</h1>
    //     <button id="buttonStyle2" onClick={() => onCategoryClick(6)}><Table/></button>
    //     <h1 id="describeTitle">כלי עבודה</h1>
    //     <button id="buttonStyle2" onClick={() => onCategoryClick(7)}><Table/></button>
    //     <h1 id="describeTitle">כלי עבודה</h1> 
    //     <button id="buttonStyle2" onClick={() => onCategoryClick(7)}><Table/></button> 
    //     <h1 id="describeTitle">כלי עבודה</h1>
    //     </>


<>

<Table id="buttonStyle" onClick={() => onCategoryClick(1)}></Table>
<Medicine id="buttonStyle" onClick={() => onCategoryClick(2)}></Medicine>
<Tools id="buttonStyle" onClick={() => onCategoryClick(3)}></Tools>
<Table id="buttonStyle" onClick={() => onCategoryClick(4)}></Table>
<Medicine id="buttonStyle" onClick={() => onCategoryClick(5)}></Medicine>
<Tools id="buttonStyle" onClick={() => onCategoryClick(6)}></Tools>
<Table id="buttonStyle" onClick={() => onCategoryClick(7)}></Table>
<Medicine id="buttonStyle" onClick={() => onCategoryClick(8)}></Medicine>
<Tools id="buttonStyle" onClick={() => onCategoryClick(9)}></Tools>
<Medicine id="buttonStyle" onClick={() => onCategoryClick(10)}></Medicine>
<Tools id="buttonStyle" onClick={() => onCategoryClick(11)}></Tools>
</>
    )



}