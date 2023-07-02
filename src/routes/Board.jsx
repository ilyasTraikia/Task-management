import React, { useState } from 'react'
import axios from 'axios'
import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './style/style.css'
import { search,arrowDown } from '../assets'
import { TodoCategory,AddtodoModal} from '../components/index/index'




export async function loader({request}) {
    const url = new URL(request.url)
    const searchParams = url.searchParams.get("search")
    if(searchParams) {
      const response = await axios.get(`https://task-backend-api.onrender.com/tasks/${searchParams}`)
      return {response,searchParams}
    } else {
      const response = await axios.get(`https://task-backend-api.onrender.com/tasks/`)
      return {response,searchParams}
    }
 
   
   
}






export default function Board() {

  //  const [isFilterDropDownVisible,setIsFilterDropDownVisible] = useState(false)
   const {response,searchParams} = useLoaderData()
   const submit = useSubmit()
 
   
  



   // filtering data
   var tasksCatOne = response.data.data.filter(function(el){return el.category ==  1})
   var tasksCatTwo = response.data.data.filter(function(el){return el.category ==  2})
   var tasksCatThree = response.data.data.filter(function(el){return el.category ==  3})





  return (
    <div className='flex flex-col pl-[70px] lg:pl-[30px] pt-[30px] pr-[30px] lg:pr-[50px] mb-4   w-full  '>







        {/* Search section */}
        <div>
          <Form role="search"  className='flex flex-row'>
            <input className='order-2 ml-4 outline-none' autoFocus defaultValue={searchParams} id='search' name='search' type="search" placeholder='Search' onChange={(event)=> {
               const isFirstSearch = searchParams == null;
              submit(event.currentTarget.form,{
                replace:!isFirstSearch
              })
            }} />
            <button className='order-1' type='submit'><img src={search} alt="search" /></button>
          </Form>
        </div>













        {/* The filter section  */}
        <div className='flex flex-row justify-between items-center  mt-[50px]  '>
         <div className='font-medium text-3xl'>Board</div>
         {/* <button onClick={()=> {setIsFilterDropDownVisible(!isFilterDropDownVisible)}} className='relative flex flex-row items-center space-x-[6px] font-normal text-base'>
          <span>This week</span>
          <img className={`transition-transform  ${isFilterDropDownVisible && 'rotate-180'}`} src={arrowDown} alt="arrow-up" /> 

          <div  style={{display:isFilterDropDownVisible? 'flex':'none'}} className='absolute py-3 w-[98px] h-[148px] bg-white shadow-FilterShadow  flex flex-col justify-between right-[2%] top-[100%]'>
           <button  className='text-[rgba(0,0,0,0.7)] text-base hover:bg-gray-200 w-full h-full transition-colors'>This day</button>
           <button  className='text-[rgba(0,0,0,0.7)] text-base hover:bg-gray-200 w-full h-full transition-colors'>This week</button>
           <button  className='text-[rgba(0,0,0,0.7)] text-base hover:bg-gray-200 w-full h-full transition-colors'>This month</button>
           <button  className='text-[rgba(0,0,0,0.7)] text-base hover:bg-gray-200 w-full h-full transition-colors'>none</button>
          </div>
          </button> */}
          <div></div>
        </div>












   

       {/* The Modal  */}
      <div id="myModal" className="modal">
      {/* Modal content */}
      <AddtodoModal />
      </div>















        {/* Main section */}
        <div className='flex flex-col  md:flex-row md:space-x-5 md:space-y-0 space-y-5  mt-[36px] '>
           <TodoCategory category="To do" cate={1} otherCate = {{2:"in progress",3:"done"}}  tasks= {tasksCatOne}/>
           <TodoCategory category="In progress" cate={2} otherCate = {{1:"to do",3:"done"}} tasks = {tasksCatTwo} />
           <TodoCategory category="Done" cate={3} otherCate = {{1:"to do",2:"in progress"}}  tasks = {tasksCatThree}   />
        </div>






  


    </div>
  )
}
