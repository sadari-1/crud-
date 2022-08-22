import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from "./component/Create";
import Home from "./component/Home";
import Update from "./component/Update";
import Menu from "./util/Menu";
import Pnf from "./util/Pnf";



function App(props) {
  return (
    <BrowserRouter>
    <Menu/>

    <Routes>
      <Route path={`/`} element={<Home/>}/>
      <Route path={`/home`} element={<Home/>}/>
      <Route path={`/Create`} element={<Create/>}/>
      <Route path={`/update/:id`} element={<Update/>}/>
      <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App