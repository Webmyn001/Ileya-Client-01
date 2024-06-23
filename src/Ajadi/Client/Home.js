import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import {  Oval } from 'react-loader-spinner'

function Home(props) {

  const [Name, setName] = useState("")
  const [Image, setImage] = useState("")
  const [School, setSchool] = useState("")
 
  const [AcctName, setAcctName] = useState("")
  const [AcctNo, setAcctNo] = useState("")
  const [bankName, setbankName] = useState("")
  const [ShortNote, setshortNote] = useState("")
  const [Level, setLevel] = useState("")
  const [WhatsappNo, setWhatsappNo] = useState("")
  const [Loading, setLoading] =useState(false)




  const navigate = useNavigate()
   

   
  const OnchangeName =(e)=> {
    setName(e.target.value)
  }

  const OnchangeSchool =(e)=> {
    setSchool(e.target.value)
  }

  const OnchangeAcctName =(e)=> {
    setAcctName(e.target.value)
  }

  const OnchangeAcctNo =(e)=> {
    setAcctNo(e.target.value)
  }

  const OnchangebankName =(e)=> {
    setbankName(e.target.value)
  }

  const OnchangeShortNote =(e)=> {
    setshortNote(e.target.value)
  }

  const OnchangeLevel =(e)=> {
    setLevel(e.target.value)
  }

  

  const OnchangeWhatsapp =(e)=> {
    setWhatsappNo(e.target.value)
  }

  const Onchangeimages = async (e) => { 
    const files = Array.from(e.target.files)
    console.log(e.target.files.length)  
  if (e.target.files.length < 1 ) {
   setImage(null)
    alert("please select only 1 image")
    }else{
         setImage([]);
         files.forEach(file => {
  
             const reader = new FileReader();
  
             reader.onload = () => {
                 if (reader.readyState === 2) {
                     setImage(oldArray => [...oldArray, reader.result]);
                     
                 }
             }
  
             reader.readAsDataURL(file)
  
         })
    }
  }

  const saveForm = async (e) => {
     setLoading(true)
    e.preventDefault();
     axios.post("https://test-backend-api-two.vercel.app/api/form/add",{Name,AcctName,School,
     Level, Image, bankName, WhatsappNo,
     AcctNo, ShortNote})
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    window.location.reload() 
    alert("Thank you! Response recieved, We will get back to you on Whatsapp.")

  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form.")
      setLoading(false)
    })
    
  }

    const Info = props.Message.slice(0,1)
  
  return (
    <div  className='bg-[#f5f5f5] pb-[60px] text-[#0b46a1] w-full min-h-screen'>
      {/* Heading */}
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#0b46a1] mt-2 to-[#24c4da] py-[2px]'>MAKE IT HALAL RAMADAN RELIEF PROGRAM</h1>


        {
          Info.map((info,i)=> (
            <div className='text-center font-montserat mt-1' key={i}>
            <marquee>{info.Message}</marquee>
            </div> 
          ))
        }

         


             <div className=' text-center  mt-[7px] mb-[5px] '>
                    <h1 className='font-medium text-[15px] '>Kindly complete the form below.</h1>
                </div>  

                    {/* Form */}
    <div className='flex font-josefins justify-center items-center '>              
    <div className='flex flex-col shadow-lg w-[320px] sm:w-[350px] h-fit border-2 justify-center border-[#b71c1a] bg-white   items-center rounded-[32px]'>

               <div className=' text-center  mt-[15px]'>
                    <h1 className='font-semibold font-arabic text-[#24c4da] text-xl sm:text-2xl '>بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>
                    <h1 className='font-semibold text-xs pt-2 text-[#b71c1a] font-josefins'>MOTO : Without love humanity is nothing</h1>
                </div>    
                  {/* Formm details */}

  <form className='w-[280px] mt-[25px]' onSubmit={saveForm} encType="multipart/form-data">
            
    <input placeholder='Full Name'  value={Name} onChange={OnchangeName} required
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] rounded-md border-[#24c4da] text-[#404348] '/>

    <input placeholder='School'  value={School} onChange={OnchangeSchool} required
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mt-[20px] rounded-md border-[#24c4da] text-[#404348] '/>

    <input placeholder='Level'  value={Level} onChange={OnchangeLevel} 
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mt-[20px] rounded-md border-[#24c4da] text-[#404348]'/>

   <h2 className='pt-5 text-[14px] text-center'>School ID card & Jamb Admission Letter</h2>
   <h3 className='text-xs pt-1 text-center'>Kindly place your ID CARD on your Jamb admission letter and snap it. (Max 2mb)</h3>
   <input  type="file"  name='Image' onChange={Onchangeimages}
         className='w-full border-b-[1px] focus:outline-0 px-3 rounded-md text-[14px] pb-[3.5px]  border-[#24c4da] text-[#404348] mb-[20px] mt-[15px]' required/>
                    

    <input placeholder='Bank Name'  value={bankName} onChange={OnchangebankName} 
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] rounded-md mt-[20px] border-[#24c4da] text-[#404348] '/> 


<input placeholder='Account Name'  value={AcctName} onChange={OnchangeAcctName} required
        className='w-full border-b-[1px]  px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[20px] border-[#24c4da] text-[#404348] '/>

<input placeholder='Account Number'  value={AcctNo} onChange={OnchangeAcctNo} required type="number" 
        className='w-full border-b-[1px] px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[20px] border-[#24c4da] text-[#404348]'/>


<h3 className='text-xs pt-[25px] text-center'>Kindly include your country code e.g +2348139116879</h3>
<input placeholder='Whatsapp Number e.g +2348139116879'  maxLength={14} value={WhatsappNo} onChange={OnchangeWhatsapp} required
        className='w-full border-b-[1px] px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[10px] border-[#24c4da] text-[#404348] '/>


    <textarea placeholder='Short note on why you neeed it.'  value={ShortNote} onChange={OnchangeShortNote} required
        className='w-full border-b-[1px] rounded-md px-3 focus:outline-0 text-[14px] pb-[3.5px] mt-[25px] border-[#24c4da] text-[#404348] '>
        </textarea>
    
     {/* Upload button */}
     <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#0b46a1" ariaLabel="loading"/> </div> : <Button name="Submit"/>}
     </div>
  </form>

     </div>
  </div>
      

    </div>
  )
}

export default Home;