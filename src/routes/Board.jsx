import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import './style/style.css'
import { search,arrowDown } from '../assets'
import { TodoCategory,AddtodoModal} from '../components/index/index'




export async function loader() {
   
    const response = await axios.get('http://localhost:4000/tasks/')
    return response
}






export default function Board() {


   const tasks = useLoaderData()
   // filtering data
   var tasksCatOne = tasks.data.data.filter(function(el){return el.category ==  1})
   var tasksCatTwo = tasks.data.data.filter(function(el){return el.category ==  2})
   var tasksCatThree = tasks.data.data.filter(function(el){return el.category ==  3})




  return (
    <div className='flex flex-col pl-[70px] lg:pl-[30px] pt-[30px] pr-[30px] lg:pr-[50px] mb-4   w-full  '>

        {/* Search section */}
        <div>
          <form action="#" className='flex flex-row'>
            <input className='order-2 ml-4 outline-none' type="search" placeholder='Search' />
            <button className='order-1' type='submit'><img src={search} alt="search" /></button>
          </form>
        </div>




        {/* The filter section  */}
        <div className='flex flex-row justify-between items-center  mt-[50px]  '>
         <div className='font-medium text-3xl'>Board</div>
         <button className='flex flex-row items-center space-x-[6px] font-normal text-base'>
          <span>This week</span>
          <img src={arrowDown} alt="arrow-up" /> 
          </button>
        </div>


   

       {/* The Modal  */}
      <div id="myModal" className="modal">
      {/* Modal content */}
      <AddtodoModal />
      </div>




        {/* Main section */}
        <div className='flex flex-col  md:flex-row md:space-x-5 md:space-y-0 space-y-5  mt-[36px] '>
           <TodoCategory category="To do" cate={1}  tasks= {tasksCatOne}/>
           <TodoCategory category="In progress" cate={2} tasks = {tasksCatTwo} />
           <TodoCategory category="Done" cate={3}  tasks = {tasksCatThree}   />
        </div>




  


    </div>
  )
}
