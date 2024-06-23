import React, { useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {Link} from "react-router-dom";






import AOS from "aos";
import "aos/dist/aos.css";
import {Oval, TailSpin} from 'react-loader-spinner'


function Home(props) {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])

    
    // to get latest lecture uploaded, first 3 lecture uploaded
   const LatestListAEC301 = props.LectureListAEC301.slice(0,3)
   const LatestListAEC303 = props.LectureListAEC303.slice(0,3)
   const LatestListANS301 = props.LectureListANS301.slice(0,3)
   const LatestListAXD301 = props.LectureListAXD301.slice(0,3)
   const LatestListCPP301 = props.LectureListCPP301.slice(0,3)
   const LatestListCPP303 = props.LectureListCPP303.slice(0,3)
   const LatestListSLM301 = props.LectureListSLM301.slice(0,3)



    

  return (
    <div className='bg-[#f5f5f5] w-full min-h-screen'>
   <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#182c25] to-[#1e453e] pt-[8px]'>NAAS-III Lecture Notes (First Semester)</h1> 
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-jost text-[#182c25]'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>

                                                {/*AEC 301*/}
   <h1 className='text-center font-bold text-white font-montserat bg-gradient-to-r from-[#182c25] to-[#1e453e] '> Statistics & Biometrics. (AEC 301)</h1>

   {props.loading ? <div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListAEC301.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}>No Lecture Available</div>  :
                  LatestListAEC301.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25] 
                              items-center text-[#182c25] 
                             justify-center w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }


                             {/* AEC 303*/}
 <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-[#182c25] to-[#1e453e] '> Principles of Agricultural Economics [I].   (AEC 303)</h1>
            
 {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListAEC303.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListAEC303.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"}  font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25]
                              items-center text-[#182c25] 
                             justify-center w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }


                             {/* ANS 301*/}
    <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-[#182c25] to-[#1e453e] '>Non-ruminant Animal Production. (ANS 301)</h1>
             
    {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListANS301.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListANS301.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25] 
                              items-center text-[#182c25] 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
                    
                    
                     {/* AXD 301*/}
  <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-[#182c25] to-[#1e453e] '> Extension Teaching & Learning Process and Methods.  (AXD 301)</h1>
           
  {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListAXD301.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListAXD301.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins  justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25]
                              items-center text-[#182c25] 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2  '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
                    
                             {/*  (CPP301)*/}
<h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-[#182c25] to-[#1e453e]'> Agronomy of Arable Crops & Agro-climatology. (CPP 301)</h1>
            
{props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListCPP301.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCPP301.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"}  font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25]
                              items-center text-[#182c25] 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
                             {/* CPP 303*/}
  <h1 className='text-center font-bold bg-gradient-to-r font-montserat text-white from-[#182c25] to-[#1e453e] '>Introductory Agricultural Entomology. (CPP 303)</h1>
            
  {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListCPP303.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCPP303.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25]
                              items-center text-[#182c25] 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }
                                {/* SLM301 */}
       <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-[#182c25] to-[#1e453e] '>Introductory Pedology and Soil Physics. (SLM 301)</h1>
            
          {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><Oval height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { LatestListSLM301.length === 0 ? 
          <div className={`min-h-[400px] text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListSLM301.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"}  font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25] 
                              items-center text-[#182c25] 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2  '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }   
</div>
)
}

export default Home