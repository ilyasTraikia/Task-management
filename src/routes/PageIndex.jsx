import React from 'react'
import { Link } from 'react-router-dom'

export default function PageIndex() {
  return (
    <div className='flex p-3 mt-[10rem] items-center justify-items-center justify-center w-full'>

          <div className=' flex flex-col space-y-4'>
    
              <div className='text-center font-bold text-4xl'> Welcome to Pro Manage for task management </div>



              <div> Pro manage is designed to help you organize your tasks into categories to help you in your work,activies,...</div>


               <div  className='mt-[100px] text-center'>
                <Link to='/board' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Start here</Link>
               </div>


          </div>


    </div>
  )
}
