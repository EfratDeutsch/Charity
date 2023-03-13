import logo from './logo.svg';
import './App.css';
 import { BrowserRouter, renderMatches, Route, Routes } from 'react-router-dom';
 import React  from 'react';

import Login from './Login';
import Signin from './Signin';
import CategoryMenu from './CategoryMenu';
import AboutUs from './AboutUs';
import Charity from './Charity';

const App=()=>(
  

<BrowserRouter>
  <Routes>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Signin" element={<Signin/>}></Route>
    <Route path="/CategoryMenu" element={<CategoryMenu/>}></Route>
    <Route path="/AboutUs" element={<AboutUs/>}></Route>
    <Route path="/Charity/:id" element={<Charity/> }></Route> 
     {/* <Route path="/Charity" element={<Charity id="" />} ></Route> */}
 </Routes>
 </BrowserRouter>
 )



export default App;
