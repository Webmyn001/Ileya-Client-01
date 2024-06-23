import React from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"
import { useEffect, useState } from 'react'

import Navbar from './NAAS-3/Admin/header/Navbar'
import Upload from './NAAS-3/Admin/Uploads/Upload'

    // view Lecture

import LectureDetails from './NAAS-3/Admin/ViewLecture/LectureDetails'
import ViewHome from './NAAS-3/Admin/ViewLecture/VeiwHome'

import ViewAEC301 from './NAAS-3/Admin/ViewLecture/ViewAEC301'
import ViewAEC303 from './NAAS-3/Admin/ViewLecture/ViewAEC303'
import ViewANS301 from './NAAS-3/Admin/ViewLecture/ViewANS301'
import ViewAXD301 from './NAAS-3/Admin/ViewLecture/ViewAXD301'
import ViewCPP301 from './NAAS-3/Admin/ViewLecture/ViewCPP301'
import ViewCPP303 from './NAAS-3/Admin/ViewLecture/ViewCPP303'
import ViewSLM301 from './NAAS-3/Admin/ViewLecture/ViewSLM301'


    //Upload  Lecture
import UploadLectureAEC301 from './NAAS-3/Admin/Uploads/UploadLectureAEC301'
import UploadLectureAEC303 from './NAAS-3/Admin/Uploads/UploadLectureAEC303'
import UploadLectureANS301 from './NAAS-3/Admin/Uploads/UploadLectureANS301'
import UploadLectureAXD301 from './NAAS-3/Admin/Uploads/UploadLectureAXD301'
import UploadLectureCPP301 from './NAAS-3/Admin/Uploads/UploadLectureCPP301'
import UploadLectureCPP303 from './NAAS-3/Admin/Uploads/UploadLectureCPP303'
import UploadLectureSLM301 from './NAAS-3/Admin/Uploads/UploadLectureSLM301'

import Footer from './NAAS-3/Admin/Footer/Footer'
import axios from 'axios'
import AllComments from './NAAS-3/Admin/AllComments'


function App() {

    const [LectureListAEC301, setLectureListAEC301] =useState([])
    const [LectureListAEC303, setLectureListAEC303] =useState([])
    const [LectureListANS301, setLectureListANS301] =useState([])
    const [LectureListAXD301, setLectureListAXD301] =useState([])
    const [LectureListCPP301, setLectureListCPP301] =useState([])
    const [LectureListCPP303, setLectureListCPP303] =useState([])
    const [LectureListSLM301, setLectureListSLM301] =useState([])
          
               // loader
    const [loading, setloading] =useState(false)

    const getLectureAEC301 = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/cpt503/")
        .then(res => {
          console.log(res.data)
          setLectureListAEC301(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }
         
       const getLectureAEC303 = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp511/")
        .then(res => {
          console.log(res.data)
          setLectureListAEC303(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }
  
       const getLectureANS301 = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp512/")
        .then(res => {
          console.log(res.data)
          setLectureListANS301(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }
  
       const getLectureAXD301 = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp405/")
        .then(res => {
          console.log(res.data)
          setLectureListAXD301(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }
  
       const getLectureCPP301 = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp304/")
        .then(res => {
          console.log(res.data)
          setLectureListCPP301(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }
  
       const getLectureCPP303 = async  () => {
        axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp305/")
        .then(res => {
          console.log(res.data)
          setLectureListCPP303(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }
  
       const getLectureSLM301 = async  () => {
          axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp305/")
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

                       {/* View lecture Routes */}
              <Route path = "/view" exact element= {<ViewHome/>}></Route>
               <Route path = "view/view-AEC301" exact element= {<ViewAEC301  LectureListAEC301={LectureListAEC301}  loading={loading}/>}></Route>
               <Route path = "view/view-AEC303" exact element= {<ViewAEC303  LectureListAEC303={LectureListAEC303}  loading={loading}/>}></Route>
               <Route path = "view/view-ANS301" exact element= {<ViewANS301  LectureListANS301={LectureListANS301}  loading={loading}/>}></Route>
               <Route path = "view/view-AXD301" exact element= {<ViewAXD301  LectureListAXD301={LectureListAXD301}  loading={loading}/>}></Route>
               <Route path = "view/view-CPP301" exact element= {<ViewCPP301  LectureListCPP301={LectureListCPP301}  loading={loading}/>}></Route>
               <Route path = "view/view-CPP303" exact element= {<ViewCPP303  LectureListCPP303={LectureListCPP303}  loading={loading}/>}></Route>
               <Route path = "view/view-SLM301" exact element= {<ViewSLM301  LectureListSLM301={LectureListSLM301}  loading={loading}/>}></Route>
               <Route path = "/lecturedetails/:id" exact element= {<LectureDetails/>}></Route>

               {/* Upload Lecture Routes */}
               <Route path = "/" exact element= {<Upload/>}></Route>
               <Route path = "/upload/upload-AEC301" exact element= {<UploadLectureAEC301/>}></Route>
               <Route path = "/upload/upload-AEC303" exact element= {<UploadLectureAEC303/>}></Route>
               <Route path = "/upload/upload-ANS301" exact element= {<UploadLectureANS301/>}></Route>
               <Route path = "/upload/upload-AXD301" exact element= {<UploadLectureAXD301/>}></Route>
               <Route path = "/upload/upload-CPP301" exact element= {<UploadLectureCPP301/>}></Route>
               <Route path = "/upload/upload-CPP303" exact element= {<UploadLectureCPP303/>}></Route>
               <Route path = "/upload/upload-SLM301" exact element= {<UploadLectureSLM301/>}></Route>

               {/* comments */}
               <Route path = "/allcomments"  exact element= {<AllComments/>}></Route>
                

             
         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App