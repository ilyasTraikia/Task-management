import React from 'react'
import axios from 'axios'
import { Form, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'
import './style/style.css'
import { search,arrowDown } from '../assets'
import { TodoCategory,AddtodoModal} from '../components/index/index'




export async function loader({request}) {
    const url = new URL(request.url)
    const searchParams = url.searchParams.get("search")
    if(searchParams) {
      const response = await axios.get(`http://localhost:4000/tasks/${searchParams}`)
      return {response,searchParams}
    } else {
      const response = await axios.get(`http://localhost:4000/tasks/`)
      return {response,searchParams}
    }
   
   
}






export default function Board() {

  
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
           <TodoCategory category="To do" cate={1} otherCate = {{2:"in progress",3:"done"}}  tasks= {tasksCatOne}/>
           <TodoCategory category="In progress" cate={2} otherCate = {{1:"to do",3:"done"}} tasks = {tasksCatTwo} />
           <TodoCategory category="Done" cate={3} otherCate = {{1:"to do",2:"in progress"}}  tasks = {tasksCatThree}   />
        </div>




  


    </div>
  )
}
