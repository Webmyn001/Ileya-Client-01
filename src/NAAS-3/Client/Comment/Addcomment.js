import React, { useState } from 'react'
import Button from './Button'
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


function Addcomment() {
  const navigate = useNavigate();
    
  const [Name, setName]= useState("")
  const [School, setSchool]= useState("")
  const [Department, setDept]= useState("")
  const [Level, setLevel]= useState("")
  const [Comment, setcomment]= useState("")

  const [Loading, setLoading] = useState(false);
 
  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(`https://fair-erin-chameleon-gown.cyclic.app/api/comment/addcomment`,{Name,School,Department,Level,Comment})
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    alert("Submitted succesfully!!")
  }).catch((err)=> {
      console.log(err)
      alert("Error!, Kindly complete the feilds and ensure you are connected to the Internet.")
    setLoading(false)

    })
 }


  const OnchangeComment = (e) => {
    setcomment(e.target.value)
  };
  const OnchangeName = (e) => {
    setName(e.target.value)
  };
  const OnchangeSchool = (e) => {
    setSchool(e.target.value)
  };
  const OnchangeDept = (e) => {
    setDept(e.target.value)
  };
  const OnchangeLevel = (e) => {
    setLevel(e.target.value)
  }

  return (

    //to Add comment 

    
    <form className='w-[220px] mt-[50px]' onSubmit={submit} encType="multipart/form-data">

    <input placeholder='Name' onChange={OnchangeName} value={Name} className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] text-[#1c1d1d] ' required/>
    <input placeholder='School' onChange={OnchangeSchool} value={School} className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] mt-[24px] text-[#1c1d1d] ' required/>
    <input placeholder='Department' onChange={OnchangeDept} value={Department} className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#1c1d1d] mt-[24px]' required/>
    <input placeholder='Level' onChange={OnchangeLevel} value={Level} className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#1c1d1d] mt-[24px]' required/>
    <textarea placeholder='Your comment ...' onChange={OnchangeComment} value={Comment} className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#1c1d1d] mt-[24px]' required/>

    <div className=' text-[#1c1d1d] pt-[8.5px] text-[14px] flex justify-end'>
    </div>
    
     {/* Log in button */}
    <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#1a456e" ariaLabel="loading"/> </div> : <Button name="Post"/>}
     </div>

     </form>
  )
}

export default Addcomment