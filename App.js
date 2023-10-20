import Layout from "./components/pages/Layout";
import React, { Component }  from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/LoginReg";
import Forgetpassword from "./components/pages/Forgetpassword";
import Resetpassword from "./components/pages/Resetpassword";
import Dashboard from "./components/pages/Dashboard";


function App() {
  return (
 <div>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout />} >
       <Route index element={<Home />}/>
       <Route path="contact" element={<Contact />}/>
       <Route path="loginreg" element={<LoginReg />}/>
       <Route path="forgetpassword" element={<Forgetpassword />}/>
       <Route path="reset" element={<Resetpassword />}/> 
    </Route>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="*" element={<h1>Page not Found</h1>} />
   </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App;
