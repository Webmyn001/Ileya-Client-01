import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Contact from './Ajadi/Client/Contact'
import Home from './Ajadi/Client/Home'
import Footer from './Ajadi/Client/Footer/Footer'
import Navbar from './Ajadi/Admin/header/Navbar'
import Admin from './Ajadi/Admin/Admin';
import Details from './Ajadi/Admin/Details';

import Messages from './Ajadi/Admin/Messages';
import Information from './Ajadi/Admin/Information';
import axios from 'axios'



function App() {

 
const [loading, setloading] =useState(false)
const [FormData, SetFormData] = useState([])
const [Loading, setLoading] =useState(false)
const [Message, setMessage] =useState([])



    const getFormData = async  () => {
        axios.get("https://test-backend-api-two.vercel.app/api/form/")
        .then(res => {
          console.log(res.data)
          SetFormData(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }

       const getMessage = async  () => {
        axios.get("https://test-backend-api-two.vercel.app/api/msg/")
        .then(res => {
            console.log(res.data)
          setMessage(res.data)
          setLoading(true)
        }).catch(err => {
          console.log(err)
        })
       }

       useEffect(() => {
        getFormData()
        getMessage()
       
        }, [])

  return (
    <div className='font-josefins bg-[#f5f5f5]'>
       <Router>
            <Navbar/>
       
         <Routes>
               {/* Admin */}
               <Route path = "/" exact element= {<Admin FormData={FormData} loading={loading}/>}></Route>
               <Route path = "/details/:id" exact element= {<Details/>}></Route>
               <Route path = "/message" exact element= {<Messages/>}></Route>
               <Route path = "/info" exact element= {<Information Loading={Loading} Message={Message}/>}></Route>







               
         </Routes>
       <Footer/>
         </Router> 

    </div>
  )
}

export default App