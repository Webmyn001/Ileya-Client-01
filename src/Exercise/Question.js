import React from 'react'

function Question() {
  return (
    <div>
        <h1 className='text-xl  px-3 pt-4 font-bold'>Question</h1>
        <p className='px-3 py-1 text-[14px] font-montserat' >
            Write a short program to simulate a ball being dropped off of a tower. 
            To start, the user should be asked for the height of the tower in meters. 
            Assume normal gravity(9.8m/s2), and that the ball has no 
            initial velocity(the ball is not moving to start). Have the program 
            output the height of the ball above the ground after 0,1,2,3,4, and 5 seconds. 
            The ball should not go underneath the ground(height =0).
        </p>
        <p className='px-3 py-1 text-[14px] font-montserat' >
            Use a function to calculate the height of the ball after x seconds. 
            The function can calculate how far the ball has fallen  after x seconds 
            using the following formula: distance fallen = gravity_constant * x_seconds2 /2.
        </p>
    </div>
  )
}

export default Question