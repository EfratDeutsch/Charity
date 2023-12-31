import logo from './logo.svg';
import './App.css';
import { BrowserRouter, renderMatches, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signin from './Signin';
import CategoryMenu from './CategoryMenu';
import AboutUs from './AboutUs';
import Charity from './Charity';
import Manager from './Manager';
import Loan from './Loan';
import Menu from './Menu';
import WhatWillUFindInUs from './WhatWillUFindInUs';
import Home from './Home';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

const App = () => {
  const [userId, setUserId] = useState();
  useEffect(() => { setUserId(localStorage.getItem("userId")) }, [])

  return (<>

    <BrowserRouter>
      <Routes>
        {userId ? <><Route path="" element={<Home />}></Route>

          <Route path="/Manager" element={<Manager />}></Route>

          <Route path="/Loan" element={<Loan />}></Route>
          <Route path="/Loan/:id" element={<Loan />}></Route>

          <Route path="/WhatWillUFindInUs" element={<WhatWillUFindInUs />}></Route>
        </>

          : <>

            <Route path="*" element={<Login setUserId={setUserId} />}></Route>
          </>
        }
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/CategoryMenu" element={<CategoryMenu />}></Route>
        <Route path="/Charity/:id" element={<Charity></Charity>}></Route>
        <Route path="/Charity/:id/:city" element={<Charity></Charity>}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}



export default App;
