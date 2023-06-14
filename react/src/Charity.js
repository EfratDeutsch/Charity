import axios from "axios";
import React, { useEffect, useState } from "react";
import { parsePath, useParams } from "react-router-dom";
import CategoryMenu from './CategoryMenu';
import Menu from './Menu';
import { ReactComponent as Table } from "./table.svg"
import { ReactComponent as Medicine } from "./Medicine.svg"
import { ReactComponent as Tools } from "./tools.svg"
import { ReactComponent as Errow } from "./errow.svg"
import "./Charity.css"
import Home from "./Home"



const Charity = (props) => {
  const params = useParams();
  const categoryId = params.id;
  const cityId=params.city;
  const [categoryName,setCategoryName]=useState("")
  const [array, setArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);
  const [mapNewCharityArray,setMapNewCharityArray]=useState([])
  const [baseArray,setBaseArray]=useState([])
  const [userName,setUserName]=useState("")
const [cityName,setCityName]=useState("")

  useEffect(() => {
     console.log(categoryId);
    console.log("אני בצאריטי");
    checkFromWhereTheyCame();
    GetAllCities();
    letcategoryname()
  }, [])


  const getuserName =async(u)=>{
    
    try{
     const res=await axios.get(`https://localhost:44397/api/User/${u}`) 
     console.log(res.data)
      setUserName(res.data)
      setUserName(res.data)
   return(<a>{userName}</a>)
    }
    catch(error){
      console.log(error);
    }
   
  }

  const checkFromWhereTheyCame=async()=>{
  if(cityId==null)
  GetCharitiesById()
  else {
      letCityName()
      GetCharitiesByCategoriesAndCities()
   
    }

}


const GetCharitiesById = async () => {
  try {
    const res = await axios.get(`https://localhost:44397/api/Charity/byCategory/${categoryId}`)
    console.log("הגמחים" + res.data);
    setBaseArray(res.data);
    setArray(res.data);
   
  }

    catch (error) {
      console.log(error);
    }
  }
  
  const GetCharitiesByCategoriesAndCities = async() =>{
  
    try{
      const res = await axios.get(`https://localhost:44397/api/Charity/getFilter?categoryId=${categoryId}&cityId=${cityId}`)
      setBaseArray(res.data);
    setArray(res.data);
    }
  
   
    catch(err) {
     
      console.log(err);
    
    }
      }
  const GetAllCities = async () => {
    try {
      const res2 = await axios.get(`https://localhost:44397/api/City`)
      console.log(res2);
      setCitiesArray(res2.data);
      console.log(citiesArray);
    }
    catch (error) {
      console.log(error);
    }
  }
const letcategoryname=()=>{
if(categoryId==1)
setCategoryName("אוכל")
else if(categoryId==2)
setCategoryName("תרופות")
else if(categoryId==3)
setCategoryName("שולחנות")
else 
setCategoryName("כלי עבודה")
}
const letCityName=()=>{
if(cityId==1)
setCityName("ירושלים")
else if(cityId==2)
setCityName("בני ברק")
else if(cityId==3)
setCityName(" חיפה")
else if(cityId==4)
setCityName("יפו")
else if(cityId==5)
setCityName("נתניה")
else if(cityId==6)
setCityName("עכו")
else if(cityId==7)
setCityName("לוד")
else if(cityId==8)
setCityName(" אחיסמך")
else if(cityId==9)
setCityName(" גנין")
else if(cityId==10)
setCityName("טלז סטון")
else if(cityId==11)
setCityName("בית  שמש")
else if(cityId==12)
setCityName(" מירון")
else if(cityId==13)
setCityName(" כפר ורדים")
else if(cityId==14)
setCityName("חמד")

}

const letImgForCharity=(categoryId)=>{

if(categoryId==1)
{
 
  return(<a id="ImgForCharity"><Tools></Tools></a>) 
  }
else if(categoryId==2)
{

  return(<a id="ImgForCharity"><Medicine></Medicine></a>) } 

else if(categoryId==3)
{

  return(<a id="ImgForCharity" title="a.charityDesc"><Table></Table></a>) }
 else {

  return(<a id="ImgForCharity"><Table></Table></a>) } 
}


const myarray = array.map((a) =>

<>
  <div id="card">
  <br></br><br></br>
  <a id="imagecaption">{letImgForCharity(a.categoryId)}</a>
<div id='squre'></div>
  {/* <a>{getuserName(a.userId)}</a>
  <a id="caption1" >יוזר ניים{getuserName(a.userId)}</a><br></br><br></br> */}
  <a id="caption1" >משפחת לוי</a><br></br><br></br>
  <a id="caption3">{a.neighborhood}</a><br></br><br></br><br></br><br></br>
  <a id="caption4">{a.phone}</a><br></br>
  <button id="showProductsButton">להצגת המוצרים</button>
</div>

      {/* <table>
        <tr>
          <th >charityId</th>
          <th>charityName</th>
          <th>categoryId</th>
          <th>userId</th>
          <th>cityId</th>
          <th>neighborhood</th>
          <th>charityDesc</th>
          <th>phone</th>
        </tr>

        <tr>
          <td>{a.charityId}</td>
          <td>{a.charityName}</td>
          <td>{a.categoryId}</td>
          <td>{a.userId}</td>
          <td>{a.cityId}</td>
            <td>{a.neighborhood}|</td>
          <td>{a.charityDesc}</td>|
          <td>{a.phone}</td>
        </tr>

      </table>  */}


    </>
  )

  const Answer =
    <select onChange={(e) => getCharitiesByCity(e.target.value)}>
      {
        citiesArray.map((a, i) =>
          <option key={i} value={a.cityId} >{a.cityName}</option>
        )

      }</select>

const getCharitiesByCity = (e) => {
console.log(e)
console.log(array);
const newArr=baseArray.filter(a=> a.cityId==e)
console.log("אררי ובתוכו גמחים מפולטרים");
console.log(newArr);
setArray(newArr)
}


useEffect(() => {
    console.log(Answer)
  }, [Answer])


  return (
     <div id="charityBackGround">
     <a id="searchResults">תוצאות חיפוש</a>
     <a id='searchCharity'>חיפוש גמח</a>
     <Errow id="errow"></Errow>
       <a id='categoryName'>{categoryName}</a>
         <div>< Errow id="errow2"></Errow>   
        
       <a id='cityName'>{cityName}</a></div>
      
       
      
      {/* <a id="imagecaption">{letcategoryname(categoryId)}</a> */}
      {myarray}
      <h1>סינון לפי ערים </h1>
      {Answer}
      {mapNewCharityArray}</div> 
   

  )
  }

export default Charity;











// // import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// // import { Button } from 'primereact/button';
// // import { Dropdown } from 'primereact/dropdown';
// // import ProductService from '../service/ProductService';
// // import { Rating } from 'primereact/rating';
// // import './DataViewDemo.css';
// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { parsePath, useParams } from "react-router-dom";
// // import CategoryMenu from './CategoryMenu';
// // import Menu from './Menu';


// // const Charity = () => {
 
// //     const [citiesArray, setCitiesArray] = useState([]);
// //     const params = useParams();
// //     const categoryId = params.id;
// //     const [array, setArray] = useState([]);
// //     const [mapNewCharityArray, setMapNewCharityArray] = useState([])
// //     const [baseArray, setBaseArray] = useState([])
 
// //     useEffect(() => {
// //     console.log(params.id);
// //     console.log("אני בצאריטי");
// //     GetCharitiesById();
// //     GetAllCities();

// //   }, [])

// //   constructor=(props)=> {
// //     super(props);
// //     state = {

// //       layout: 'grid',
// //       sortKey: null,
// //       sortOrder: null,
// //       sortField: null
// //     };
   

// //     sortOptions = [
// //       { label: 'Price High to Low', value: '!price' },
// //       { label: 'Price Low to High', value: 'price' },
// //     ];

// //    productService = new ProductService();
// //    itemTemplate = itemTemplate.bind(this);
// //   onSortChange = onSortChange.bind(this);
// //   }

// //   const GetCharitiesById = async () => {
// //     try {
// //       const res = await axios.get(`https://localhost:44397/api/Charity/byCategory/${categoryId}`)
// //       console.log("הגמחים" + res.data);
// //       setBaseArray(res.data);
// //       setArray(res.data);
// //       console.log(baseArray);


// //     }
// //     catch (error) {
// //       console.log(error);
// //     }
// //   }

// //   const GetAllCities = async () => {
// //     try {
// //       const res2 = await axios.get(`https://localhost:44397/api/City`)
// //       console.log(res2);
// //       setCitiesArray(res2.data);
// //       console.log(citiesArray);
// //     }
 
 
// //     catch (error) {
// //       console.log(error);
// //     }
// //   }


 

// //   onSortChange = (event) => {
// //     const value = event.value;

// //     if (value.indexOf('!') === 0) {
// //       setState({
// //         sortOrder: -1,
// //         sortField: value.substring(1, value.length),
// //         sortKey: value
// //       });
// //     }
// //     else {
// //       setState({
// //         sortOrder: 1,
// //         sortField: value,
// //         sortKey: value
// //       });
// //     }
// //   }

// //   renderListItem = (data) => {
// //     return (
// //       <div className="p-col-12">
// //         <div className="product-list-item">
// //           <img src={`showcase/demo/images/product/${charitiesArray.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
// //           <div className="product-list-detail">
// //             <div className="product-name">{data.name}</div>
// //             <div className="product-description">{data.description}</div>
// //             <Rating value={data.rating} readonly cancel={false}></Rating>
// //             <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
// //           </div>
// //           <div className="product-list-action">
// //             <span className="product-price">${data.price}</span>
// //             <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
// //             <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   renderGridItem = (data) => {
// //     return (
// //       <div className="p-col-12 p-md-4">
// //         <div className="product-grid-item card">
// //           <div className="product-grid-item-top">
// //             <div>
// //               <i className="pi pi-tag product-category-icon"></i>
// //               <span className="product-category">{data.category}</span>
// //             </div>
// //             <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
// //           </div>
// //           <div className="product-grid-item-content">
// //             <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
// //             <div className="product-name">{data.name}</div>
// //             <div className="product-description">{data.description}</div>
// //             <Rating value={data.rating} readonly cancel={false}></Rating>
// //           </div>
// //           <div className="product-grid-item-bottom">
// //             <span className="product-price">${data.price}</span>
// //             <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   itemTemplate = (product, layout) => {
// //     if (!product) {
// //       return;
// //     }

// //     if (layout === 'list')
// //       return this.renderListItem(product);
// //     else if (layout === 'grid')
// //       return this.renderGridItem(product);
// //   }

// //   renderHeader = () => {
// //     return (
// //       <div className="p-grid p-nogutter">
// //         <div className="p-col-6" style={{ textAlign: 'left' }}>
// //           <Dropdown options={sortOptions} value={state.sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
// //         </div>
// //         <div className="p-col-6" style={{ textAlign: 'right' }}>
// //           <DataViewLayoutOptions layout={state.layout} onChange={(e) => this.setState({ layout: e.value })} />
// //         </div>
// //       </div>
// //     );
// //   }




// //   return (

// //     <div className="dataview-demo">
// //       <div className="card">
// //         <DataView value={baseArray} layout={state.layout} header={header}
// //           itemTemplate={itemTemplate} paginator rows={9}
// //           sortOrder={state.sortOrder} sortField={state.sortField} />
// //       </div>
// //     </div>
// //   )

// // }
// // export default Charity;         


// import React, { Component,setState } from 'react';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import { Button } from 'primereact/button';
// import { Dropdown } from 'primereact/dropdown';
// import ProductService from './srvice/ProductService';
// import { Rating } from 'primereact/rating';
// import './DataViewDemo.css';

// export default class Charity {

 

//       sortOptions = [
//             {label: 'Price High to Low', value: '!price'},
//             {label: 'Price Low to High', value: 'price'},
//         ];

//         productService = new ProductService();
//        itemTemplate = this.itemTemplate.bind(this);
//         onSortChange = this.onSortChange.bind(this);
    

//     componentDidMount=()=> {
//       ProductService.getProducts().then(data => this.setState({ products: data }));
//     }

//     onSortChange=(event)=> {
//         const value = event.value;

//         if (value.indexOf('!') === 0) {
//            setState({
//                 sortOrder: -1,
//                 sortField: value.substring(1, value.length),
//                 sortKey: value
//             });
//         }
//         else {
//             setState({
//                 sortOrder: 1,
//                 sortField: value,
//                 sortKey: value
//             });
//         }
//     }

//     renderListItem=(data)=> {
//         return (<h1 style={{color:"blue"}}>jkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjk</h1>
//             // <div className="p-col-12">
//             //     <div className="product-list-item">
//             //         <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
//             //         <div className="product-list-detail">
//             //             <div className="product-name">{data.name}</div>
//             //             <div className="product-description">{data.description}</div>
//             //             <Rating value={data.rating} readonly cancel={false}></Rating>
//             //             <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
//             //         </div>
//             //         <div className="product-list-action">
//             //             <span className="product-price">${data.price}</span>
//             //             <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
//             //             <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
//             //         </div>
//             //     </div>
//             // </div>
//         );
//     }

//     renderGridItem=(data)=> {
//         return (
//             <div className="p-col-12 p-md-4">
//                 <div className="product-grid-item card">
//                     <div className="product-grid-item-top">
//                         <div>
//                             <i className="pi pi-tag product-category-icon"></i>
//                             <span className="product-category">{data.category}</span>
//                         </div>
//                         <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
//                     </div>
//                     <div className="product-grid-item-content">
//                     <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
//                         <div className="product-name">{data.name}</div>
//                         <div className="product-description">{data.description}</div>
//                         <Rating value={data.rating} readonly cancel={false}></Rating>
//                     </div>
//                     <div className="product-grid-item-bottom">
//                         <span className="product-price">${data.price}</span>
//                         <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     itemTemplate=(product, layout) =>{
//         if (!product) {
//             return;
//         }

//         if (layout === 'list')
//             return this.renderListItem(product);
//         else if (layout === 'grid')
//             return this.renderGridItem(product);
//     }

//     renderHeader=() =>{
//         return (
//             <div className="p-grid p-nogutter">
//                 <div className="p-col-6" style={{textAlign: 'left'}}>
//                     <Dropdown options={this.sortOptions} value={this.state.sortKey} optionLabel="label" placeholder="Sort By Price" onChange={this.onSortChange}/>
//                 </div>
//                 <div className="p-col-6" style={{textAlign: 'right'}}>
//                     <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({ layout: e.value })} />
//                 </div>
//             </div>
//         );
//     }



//       //   return (
//       //     <>  {const header = renderHeader();}
//       //       <div className="dataview-demo">
//       //           <div className="card">
//       //               <DataView value={state.products} layout={state.layout} header={header}
//       //                       itemTemplate={itemTemplate} paginator rows={9}
//       //                       sortOrder={state.sortOrder} sortField={state.sortField} />
//       //           </div>
//       //       </div>
//       //   </>)
//       //  }
//   }


// import React, { useState, useEffect } from 'react';
// // import { ProductService } from './service/ProductService';
// import { Button } from 'primereact/button';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import { Rating } from 'primereact/rating';
// import { Tag } from 'primereact/tag';
// import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import axios from "axios";
//  import './DataViewDemo.css';



// export default function Charity() {//BasicDemo
//     //const [products, setProducts] = useState([]);
//     const categoryId=useParams();
//     const [layout, setLayout] = useState('grid');
//     const navigate=useNavigate();
//     const params=useParams();
//     const [places, setPlaces] = useState([]);
    
//     const get = async (url) => {
//       console.log(categoryId.id);
//         const res = await axios.get(`https://localhost:44397/api/Charity/byCategory/${categoryId.id}`)

//         console.log(res);
//         setPlaces(res);
//         console.log(places);
//     }

//     useEffect(() => {
//         get()
//     }, [])

    // useEffect(() => {
    //     ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
    // }, []);

    // const getSeverity = (product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };

    // const listItem = (place) => {
    //     return (
    //         <div className="col-12">
    //             <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
    //                 {/* our img!!!!!!!!!!!    place.image */}
    //                 {/* <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} /> */}
    //                 <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
    //                     <div className="flex flex-column align-items-center sm:align-items-start gap-3">
    //                         <div className="text-2xl font-bold text-900">{place.charityName}</div>
    //                         {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
    //                         <div className="flex align-items-center gap-3">
    //                             <span className="flex align-items-center gap-2">
    //                                 <i className="'pi pi-map-marker'"></i>
    //                                 <span className="font-semibold">Category: {place.categoryId}</span><br/>
    //                                 {/* <span className="font-semibold">Address: {place.address}</span><br/>
    //                                 <span className="font-semibold">Segula: {place.segula}</span>
    //                                 <span className="font-semibold">--{place.description}--</span> */}
    //                             </span>
    //                             {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
    //                         </div>
    //                     </div>
    //                     <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
    //                         <span className="text-2xl font-semibold">Id: {place.cityId}</span>
    //                         {/* dialog */}
    //                         <Button icon="pi pi-trash" className="p-button-rounded" onClick={()=>{}}></Button>
    //                          {/* dialog */}
    //                         <Button icon="pi pi-trash" className="p-button-rounded" onClick={()=>{}}></Button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    // id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
    // name:{type:DataTypes.STRING,allowNull: false },
    // address:{type:DataTypes.STRING,allowNull: false },
    // description:DataTypes.STRING,
    // image:DataTypes.STRING,
    // segula:DataTypes.STRING,
    // country:{



//     const gridItem = (place) => {
//         return (<> {/* <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">*/}
//                 <div className="p-4 border-1 surface-border surface-card border-round">
//                     <div >
//                         <div className="flex align-items-center gap-2"> 
//                             <i className='pi pi-map-marker'></i>
                           
//                         </div>
//                         {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
//                      </div>
//                     <div style={{width:"50px",hight:"20%"}}>
//                         {/* <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} /> */}
//                         <div className="text-2xl font-bold">{place.charityName}</div>
// {/*                         
//                         <span className="font-semibold">Country: {place.country}</span>
//                             <span className="font-semibold">Address: {place.address}</span>
//                             <span className="font-semibold">Segula: {place.segula}</span>
//                             <span className="font-semibold">--{place.description}--</span> */}
//                         {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
//                     </div>
//                     <div className="flex align-items-center justify-content-between">
//                         {/* <span className="text-2xl font-semibold">Id:{place.id}</span> */}
//                          {/* dialog */}
//                          <Button icon="pi pi-trash" className="p-button-rounded" onClick={()=>{}}></Button>
//                              {/* dialog */}
//                         <Button icon="pi pi-trash" lable="Edit" className="p-button-rounded" onClick={()=>{navigate(`/EditPlace/${place.id}`)}}></Button>
//                     </div>
//                 </div>
//            {/*  </div> */}
//             </> );
//     };

//     const itemTemplate = (place, layout) => {
//         if (!place) {
//             return;
//         }

//         if (layout === 'list') return listItem(place);
//         else if (layout === 'grid') return gridItem(place);
//     };

//     const header = () => {
//         return (
//             <div className="flex justify-content-end">
//                 <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
//             </div>
//         );
//     };

//     return (
//         <div className="card">
//             <br/><br/><br/><br/>
//             <DataView value={places} itemTemplate={itemTemplate} layout={layout} header={header()} />
//         </div>
//     )
// }

