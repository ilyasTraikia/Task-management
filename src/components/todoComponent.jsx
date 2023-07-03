import axios from 'axios'
import React, { useState,useEffect} from 'react'
import { Form, redirect } from 'react-router-dom'
import {points} from '../assets'
import UpdateTask from './UpdateTask'
import './style/styles.css'





export  function action({params}) {
    axios.put(`${import.meta.env.VITE_API_URL}/tasks/updateCategory/${params.taskId}`,{
      category: params.cateId
    })
    return null
}






export default function TodoComponent(props) {

  const [dropdownVisible,setDropdownVisible] = useState(false)
  const [isUpdateTaskModalVisible,setIsUpdateTaskModalVisible] = useState(false);

  


  function changeUpdateModalState() {
    setIsUpdateTaskModalVisible(false)
  }











  return (
    <div className='bg-white rounded-[20px] p-[24px] flex flex-col space-y-2'>
      
       {/* The todo type */}
       <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row space-x-[5px] items-center'>
          <div className='w-[9px] h-[9px] rounded-full ' style={{backgroundColor:props.task.tagColor}}></div>
          <div className='font-medium text-[#707070] text-[8px] leading-[12px]'>{props.task.title}</div>
        </div>
      

















        {/* the points with the drop down menu */}
         <div className='relative mb-[4px] rounded-full hover:bg-btnGray2 transition-colors cursor-pointer' onClick={()=>{setDropdownVisible(!dropdownVisible)}} >
          <button className='m-[4px] mb-[12px] mx-[6px]'><img src={points} alt="points" /></button>
         
          
          <div id='DropDownMenu'  className={`absolute border-[0.1px] bg-white shadow-dropShadow  border-[rgba(0,0,0,0.1)]   w-[69px] h-[96px]   ${!dropdownVisible && 'hidden'}`}>
            <div className='flex flex-col p-[4px] justify-between text-[14px] font-normal  h-full'>
              <div className=' dropDown-items hover:bg-slate-100 ' onClick={()=> {setIsUpdateTaskModalVisible(true)}}>update</div>


              <div className='dropdown dropDown-items hover:bg-slate-100'>
                move to
                <div className="dropdown-content">
                     <Form  method='post' action={props.task.id+ "/update/"+Object.keys(props.othercat)[0]} className='dropDown-items w-full h-full hover:bg-slate-100'><button className='w-full h-full' type='submit'>{props.othercat[Object.keys(props.othercat)[0]]}</button></Form>
                     <Form  method='post' action={props.task.id+ "/update/"+Object.keys(props.othercat)[1]} className='dropDown-items w-full h-full hover:bg-slate-100'><button className='w-full h-full' type='submit'>{props.othercat[Object.keys(props.othercat)[1]]}</button></Form>
                </div>
              </div>

              <Form method='post' action={props.task.id + "/destroy"} className=' dropDown-items hover:bg-red-500 hover:text-white'><button>delete</button></Form>
            </div>
          </div>


         </div>
       </div>  







       {/* The update  Modal  */}
       <div id='updateModal' style={{display:isUpdateTaskModalVisible? 'flex' : 'none'}}  className="modal">
       {/* Modal content */}
         <UpdateTask task={props.task}  updateModalState={changeUpdateModalState} />
       </div>











       {/* The header of the todo */}
       <div className='font-medium text-lg'>
          {props.task.heading}
       </div>















       {/* the todo content */}
       <div className='font-normal text-xs'>
            {props.task.content}
       </div>








    </div>
  )
}
