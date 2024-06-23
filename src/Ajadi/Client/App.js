import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Contact from './Ajadi/Client/Contact'
import Home from './Ajadi/Client/Home'
import Footer from './Ajadi/Client/Footer/Footer'
import Navbar from './Ajadi/Client/header/Navbar'
import axios from 'axios';




function App() {

  const [Message, setMessage] =useState([])


  const getMessage = async  () => {
    axios.get("https://test-backend-api-two.vercel.app/api/msg/")
    .then(res => {
        console.log(res.data)
      setMessage(res.data)
    }).catch(err => {
      console.log(err)
    })
   }

   useEffect(() => {
    getMessage()
   
    }, [])
 
  return (
    <div className='font-josefins bg-[#f5f5f5]'>
       
       <Router>
    <Navbar/>
         <Routes>
               <Route path = "/" exact element= {<Home  Message={Message} />}></Route>
               <Route path = "/contact" exact element= {<Contact/>}></Route>
         </Routes>
       <Footer/>
         </Router> 

    </div>
  )
}

export default App