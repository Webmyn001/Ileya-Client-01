import React from 'react'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Home from './Ileya/Client/Home'
import Header from './Ileya/Client/Header';




function App() {

  
 
  return (
    <div className='font-josefins bg-[#ddd0c8]'>
       
       <Router>
    <Header/>
         <Routes>
               <Route path = "/" exact element= {<Home/>}></Route>
         </Routes>
         </Router> 

    </div>
  )
}

export default App