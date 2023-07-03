import React from 'react'
import {Form,useNavigation,redirect} from "react-router-dom"
import './style/styles.css'
import { close } from '../assets'
import axios from 'axios'





export async function action({request,params}) {
    const formData = await request.formData();
    const title = formData.get('title')
    const heading = formData.get('heading')
    const content = formData.get('content')
    const color = formData.get('color')
    const taskId = formData.get('taskId')
    const taskCategory = formData.get('taskCategory')
    const date = new Date().toJSON().slice(0, 10)

   await axios.put(`${import.meta.env.VITE_API_URL}tasks/updateTask/${taskId}`, {
         title:title,
         heading:heading,
         content:content,
         tagColor:color,
         created_at:date,
         category:taskCategory
        })
    
 
        return redirect('/board');
}













export default function UpdateTask(props) {



  const navigation = useNavigation()



  return (

  
      <Form action='updateTask/70'  method='post' className='flex flex-col bg-white w-[890px] h-[455px] rounded-[20px] pl-[52px] pt-[48px] pr-[37px] pb-[34px] shadow-modal mx-auto'>
  
          {/* The tag selection */}
          <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center space-x-[11px]'>
                 <div className='font-medium text-lg'>Choose a tag color:</div>
                 <input name='color' defaultValue={props.task.tagColor} type="color" />
              </div>
  
  
              <button type='button' onClick={props.updateModalState}>
                  <img src={close} alt="close" />
              </button>
          </div>
  


           {/* Hidden inputs for update informations  */}
          <input type="hidden" name='taskId' value={props.task.id}/>
          <input type="hidden" name='taskCategory' value={props.task.category}/>

  


        {/* the title of the todo */}
          <div className='mt-[11px] flex flex-row items-center space-x-3'>
           <div className='font-medium text-lg'>The title of your task:</div>
           <input defaultValue={props.task.title} name='title' type="text" placeholder='title' className='pl-2 outline-none' />
          </div>
  
       {/* the heading */}
          <div className='mt-[58px] flex flex-row items-center space-x-3'>
           <div className='font-medium text-lg'>The heading:</div>
           <input defaultValue={props.task.heading} name='heading' type="text" placeholder='heading' className='pl-2 outline-none' />
          </div>
  
  
  
      {/* the content */}
          <div className='mt-[39px] flex flex-row  space-x-3'>
           <div className='font-medium text-lg'>The content:</div>
           <textarea defaultValue={props.task.content} name='content' className='pl-2 outline-none'  id="" cols="90" rows="6" style={{resize:"none"}} placeholder='content'></textarea>
          </div>
  
  
  
      {/* the save or cancel button */}
          <div className='flex flex-row justify-between mt-4'>
            <div></div>
           <div className='flex flex-row space-x-[31px]'>
              <button type='button' onClick={props.updateModalState} className='w-[90px] h-[37px]  bg-[#EEF2F5] font-medium text-lg rounded-[15px]'>Cancel</button>
              <button type='submit' className='w-[90px] h-[37px]  bg-[#40A737] font-medium text-lg text-white rounded-[15px]'>{navigation.state == "submitting"? 'Updating...':'Update'}</button>
           </div> 
          </div> 
  
  
      </Form>

    
  )
}
