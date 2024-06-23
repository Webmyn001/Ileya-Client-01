import React, { useState } from 'react'
import {FaArrowDown} from "react-icons/fa"


function Solution() {
    const [Input, setInput] =useState()
    const [Open, setOpen] =useState(true)


    // 0,1,2,3,4,5 secs
    let x1 = 0
    let x2=  1
    let x3 = 2
    let x4 = 3
    let x5 = 4
    let x6 = 5

    //gravitational constant 9.8 m/s2
    let G = 9.8

    // Height after 0,1,2,3,4,5 secs respectively. Input is equal to the height of the tower
   
    const H1 = Input - G* Math.pow(x1,2)/2
    const H2 = Input - G* Math.pow(x2,2)/2
    const H3 = Input - G* Math.pow(x3,2)/2
    const H4 = Input - G* Math.pow(x4,2)/2
    const H5 = Input - G* Math.pow(x5,2)/2
    const H6 = Input - G* Math.pow(x6,2)/2

   
    const OnchangeInput =(e) => {
       setInput(e.target.value)
    }

    const View = (e) =>{
        setOpen(!Open)
    }



  return (
    <div className='bg-teal-400 font-josefins min-h-screen'>
        <h1 className='text-center pt-4 text-xl font-bold'>Solution</h1>
        <form className='flex flex-col justify-center items-center pt-5'>
            <h1>Enter the height of the tower in meters </h1>
   <input value={Input} onChange={OnchangeInput} placeholder="Numbers only e.g 100 " 
    className='pl-2 py-1 text-sm mt-2' />
   </form>


     <div className='flex justify-center items-center pt-3'>
        <button onClick={View} className="flex items-center bg-blue-600 border-2 font-semibold rounded-md py-1 gap-x-2 px-2 justify-center">View Result <FaArrowDown/>  </button>
    </div>
    
    {/* A  ternary operation to open and close result */}
    {Open ? "" : <div className='px-4 py-2 mt-3'>
        {/* A ternary operation to check if the value is negative or positve, if the value is negative, the ball is on the ground  */}

    {Math.sign(H1) === -1 ? <h1>At 0 seconds, the ball is on the ground (i.e distance fallen is much than height of the tower)</h1> : 
   <h1>At 0 seconds, the ball is at height: {H1.toFixed(1)} meters</h1>}

    {Math.sign(H2) === -1 ? <h1>At 1 seconds, the ball is on the ground (i.e distance fallen is much than height of the tower)</h1> : 
   <h1>At 1 seconds, the ball is at height: {H2.toFixed(1)} meters</h1>}

    {Math.sign(H3) === -1 ? <h1>At 2 seconds, the ball is on the ground (i.e distance fallen is much than height of the tower)</h1> : 
     <h1>At 2 seconds, the ball is at height: {H3.toFixed(1)} meters</h1>}
     
     {Math.sign(H4) === -1 ? <h1>At 3 seconds, the ball is on the ground (i.e distance fallen is much than height of the tower)</h1> : 
     <h1>At 3 seconds, the ball is at height: {H4.toFixed(1)} meters</h1>}

    {Math.sign(H5) === -1 ? <h1>At 4 seconds, the ball is on the ground (i.e distance fallen is much than height of the tower)</h1> : 
     <h1>At 4 seconds, the ball is at height: {H4.toFixed(1)} meters</h1>}

   {Math.sign(H6) === -1 ? <h1>At 5 seconds, the ball is on the ground (i.e distance fallen is much than height of the tower)</h1> : 
     <h1>At 5 seconds, the ball is at height: {H6.toFixed(1)} meters</h1>}

    

       </div>}
    </div>
  )
}

export default Solution