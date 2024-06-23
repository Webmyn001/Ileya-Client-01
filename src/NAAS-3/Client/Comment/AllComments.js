import React, { useEffect, useState } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
import {Link, useLocation, useNavigate} from "react-router-dom"
import axios from 'axios';

function AllComments() {

    const location = useLocation()
    const data = location.state
    
    console.log(data)
    const deleteUser = async (id) => {
        try
        {
          await axios.delete(`https://fair-erin-chameleon-gown.cyclic.app/api/comment/${id}`);
          alert("Comment deleted.")
            }catch (err) 
        {
        console.log(err);
        alert("Unable to delete, Kindly refresh this page")
        }
        
      }

  return (
    <div>
    <div className='bg-gradient-to-t min-h-screen bg-[#f5f5f5] flex flex-col items-center '>
         <h1 className='text-center font-bold text-white w-full font-montserat bg-gradient-to-r from-[#182c25] to-[#1e453e] '> Comments from the users.</h1>
      {
        data.map((comment)=>(
          <div className="shadow-sm text-[#182c25]
          p-5  m-3 border-l-8 border-2 border-[#182c25] w-[300px] sm:w-[350px] flex flex-col justify-center items-center rounded-lg"key={comment._id} data-aos="zoom-in">
            <ol className="text-sm font-semiold flex flex-col items-center justify-center ">
                <li>   <span className="text-center font-bold   capitalize"> {comment.Name}</span> </li>
                <li>   <span className=" text-center font-semibold " >{comment.School}</span> </li>
                <li>   <span className="italic text-center font-bold  " >{comment.Department}</span></li>
                <li>  <span className=" text-center font-semibold " >Level: {comment.Level} </span> </li>
                <li>    <span className=" text-center  "><Typewriter 
             options={{
              autoStart:true,
              loop:false,
              delay: 50,
              strings:`${comment.Comment}`
             }}
           />
           </span> </li>
            </ol>

            <button onClick={()=>deleteUser(comment._id)}
             className="bg-[#182c25] text-white mt-3 focus:outline-0 rounded-md px-2 py-1">Delete</button>
        </div>
        ))
      
      }
    </div>
    </div>
  )
}

export default AllComments