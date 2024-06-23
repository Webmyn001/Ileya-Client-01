import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './NAAS-3/Client/header/Navbar'
import Home from './NAAS-3/Client/HomePage/Home'



import LectureDetails from './NAAS-3/Client/ViewLecture/LectureDetails'
import ViewHome from './NAAS-3/Client/ViewLecture/VeiwHome'



import ViewAEC301 from './NAAS-3/Client/ViewLecture/ViewAEC301'
import ViewAEC303 from './NAAS-3/Client/ViewLecture/ViewAEC303'
import ViewANS301 from './NAAS-3/Client/ViewLecture/ViewANS301'
import ViewAXD301 from './NAAS-3/Client/ViewLecture/ViewAXD301'
import ViewCPP301 from './NAAS-3/Client/ViewLecture/ViewCPP301'
import ViewCPP303 from './NAAS-3/Client/ViewLecture/ViewCPP303'
import ViewSLM301 from './NAAS-3/Client/ViewLecture/ViewSLM301'

import axios from 'axios'
import Contact from './NAAS-3/Client/Contact/Contact'
import Footer from './NAAS-3/Client/Footer/Footer'
import Comment from './NAAS-3/Client/Comment/Comment'
import AllComments from './NAAS-3/Client/Comment/AllComments'



function App() {

     const [LectureListAEC301, setLectureListAEC301] =useState([])
     const [LectureListAEC303, setLectureListAEC303] =useState([])
     const [LectureListANS301, setLectureListANS301] =useState([])
     const [LectureListAXD301, setLectureListAXD301] =useState([])
     const [LectureListCPP301, setLectureListCPP301] =useState([])
     const [LectureListCPP303, setLectureListCPP303] =useState([])
     const [LectureListSLM301, setLectureListSLM301] =useState([])

     
     const [loading, setloading] =useState(false)

     const getLectureAEC301 = async  () => {
      axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/aec301/")
      .then(res => {
        console.log(res.data)
        setLectureListAEC301(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }
       
     const getLectureAEC303 = async  () => {
      axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/aec303/")
      .then(res => {
        console.log(res.data)
        setLectureListAEC303(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureANS301 = async  () => {
      axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/ans301/")
      .then(res => {
        console.log(res.data)
        setLectureListANS301(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureAXD301 = async  () => {
      axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/axd301/")
      .then(res => {
        console.log(res.data)
        setLectureListAXD301(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCPP301 = async  () => {
      axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/cpp301/")
      .then(res => {
        console.log(res.data)
        setLectureListCPP301(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCPP303 = async  () => {
      axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/cpp303/")
      .then(res => {
        console.log(res.data)
        setLectureListCPP303(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureSLM301 = async  () => {
        axios.get("https://fair-erin-chameleon-gown.cyclic.app/api/slm301/")
        .then(res => {
          console.log(res.data)
          setLectureListSLM301(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }


   useEffect(() => {
        getLectureAEC301()
        getLectureAEC303()
        getLectureANS301()
        getLectureAXD301()
        getLectureCPP301()
        getLectureCPP303()
        getLectureSLM301()

        }, [])


  return (
    <div>

    <Router>
            <Navbar/>
       
         <Routes>

           {/* Home Page Routes */}
               <Route path = "/" exact element= {
               <Home LectureListAEC301={LectureListAEC301} 
               loading={loading} 
               LectureListAEC303={LectureListAEC303}
               LectureListANS301={LectureListANS301} 
               LectureListAXD301={LectureListAXD301} 
               LectureListCPP301={LectureListCPP301}
               LectureListCPP303={LectureListCPP303} 
               LectureListSLM301={LectureListSLM301} 
               
               />}> 
               </Route>

               {/* View lecture */}
               <Route path = "/view" exact element= {<ViewHome/>}></Route>
               <Route path = "view/view-AEC301" exact element= {<ViewAEC301  LectureListAEC301={LectureListAEC301}  loading={loading}/>}></Route>
               <Route path = "view/view-AEC303" exact element= {<ViewAEC303  LectureListAEC303={LectureListAEC303}  loading={loading}/>}></Route>
               <Route path = "view/view-ANS301" exact element= {<ViewANS301  LectureListANS301={LectureListANS301}  loading={loading}/>}></Route>
               <Route path = "view/view-AXD301" exact element= {<ViewAXD301  LectureListAXD301={LectureListAXD301}  loading={loading}/>}></Route>
               <Route path = "view/view-CPP301" exact element= {<ViewCPP301  LectureListCPP301={LectureListCPP301}  loading={loading}/>}></Route>
               <Route path = "view/view-CPP303" exact element= {<ViewCPP303  LectureListCPP303={LectureListCPP303}  loading={loading}/>}></Route>
               <Route path = "view/view-SLM301" exact element= {<ViewSLM301  LectureListSLM301={LectureListSLM301}  loading={loading}/>}></Route>
               <Route path = "/lecturedetails/:id" exact element= {<LectureDetails/>}></Route>

               {/* CONTACT */}
               <Route path = "/contact" exact element= {<Contact/>}></Route>

               {/* comment to be done later*/}

               <Route path = "/comment" exact element= {<Comment/>}></Route>
               <Route path = "/allcomments" exact element= {<AllComments/>}></Route>


               
         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App