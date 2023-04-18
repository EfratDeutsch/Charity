import logo from './logo.svg';
import './App.css';
 import { BrowserRouter, renderMatches, Route, Routes } from 'react-router-dom';
 import React  from 'react';

import Login from './Login';
import Signin from './Signin';
import CategoryMenu from './CategoryMenu';
import AboutUs from './AboutUs';
import Charity from './Charity';
import Manager from './Manager';
import Loan from './Loan';
import Menu from './Menu';
import Instegram from'./Instegram';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 

const App=()=>(
  

<BrowserRouter>
  <Routes>
  <Route path="" element={<Menu/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Signin" element={<Signin/>}></Route>
    <Route path="/CategoryMenu" element={<CategoryMenu/>}></Route>
    <Route path="/AboutUs" element={<AboutUs/>}></Route>
    <Route path="/Charity/:id" element={<Charity/> }></Route> 
    <Route path="/Manager" element={<Manager/>}></Route>
    <Route path="/Loan/:id" element={<Loan/>}></Route>

    <Route path="/Instegram" element={<Instegram/>}></Route>
 </Routes>
 </BrowserRouter>
 )



export default App;
