import React from "react";
import { useParams } from "react-router-dom";
import CategoryMenu from './CategoryMenu';

 const Charity=(props)=>{
// console.log(useParams());
// console.log(props.id);
console.log("אני בצאריטי");
console.log(props);
return(
 <div>
      <h1>שלום שלום</h1>
    {/* <h1>{props.id}</h1> */}
    <h1>{props}</h1>
  </div>
   
)
}




// import React from "react";
// import CategoryMenu from './CategoryMenu';

// export default function Charity(props){

// console.log(props.id);
//   //  alert("זה הפרופס"+ props.id+props+props.data+props.category);
//     alert(props)
//     console.log(props.id);
// return(
//     <tbody>  
//          <h1>קודם כל תרגעי את בצאריטי קומפוננט</h1>
//      <h1>{props.id} פרופסאידי</h1>
//      <h1>{props.data}פרופסדאטה</h1>
   
//     </tbody>
 
// )
// }
export default Charity;