import React, { useState } from 'react'
import {Form,redirect,useNavigation} from "react-router-dom"
import {close} from '../assets'
import axios  from 'axios'




export async function action({request,params}) {
      const formData = await request.formData();
      const element = document.getElementsByTagName("Form");
      const title = formData.get('title')
      const heading = formData.get('heading')
      const content = formData.get('content')
      const color = formData.get('color')
      const date = new Date().toJSON().slice(0, 10)

     

      await axios.post(`${import.meta.env.VITE_API_URL}/tasks/addTask`, {
           title:title,
           heading:heading,
           content:content,
           tagColor:color,
           created_at:date,
           category:element[1].id
          })
         
   
          return redirect('/board');
}






export default function AddtodoModal() {

  const navigation = useNavigation()





  return (
    <Form  method='post' className='flex flex-col bg-white w-[890px] h-[455px] rounded-[20px] pl-[52px] pt-[48px] pr-[37px] pb-[34px] shadow-modal mx-auto'>

        {/* The tag selection */}
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row items-center space-x-[11px]'>
               <div className='font-medium text-lg'>Choose a tag color:</div>
               <input name='color' type="color" />
            </div>


            <button type='button' onClick={()=> {document.getElementById("myModal").style.display = "none"}}>
                <img src={close} alt="close" />
            </button>
        </div>


      {/* the title of the todo */}
        <div className='mt-[11px] flex flex-row items-center space-x-3'>
         <div className='font-medium text-lg'>The title of your task:</div>
         <input name='title' type="text" placeholder='title' className='pl-2 outline-none' />
        </div>

     {/* the heading */}
        <div className='mt-[58px] flex flex-row items-center space-x-3'>
         <div className='font-medium text-lg'>The heading:</div>
         <input name='heading' type="text" placeholder='heading' className='pl-2 outline-none' />
        </div>



    {/* the content */}
        <div className='mt-[39px] flex flex-row  space-x-3'>
         <div className='font-medium text-lg'>The content:</div>
         <textarea name='content' className='pl-2 outline-none'  id="" cols="90" rows="6" style={{resize:"none"}} placeholder='content'></textarea>
        </div>



    {/* the save or cancel button */}
        <div className='flex flex-row justify-between mt-4'>
          <div></div>
         <div className='flex flex-row space-x-[31px]'>
            <button type='button' onClick={()=> {document.getElementById("myModal").style.display = "none"}} className='w-[90px] h-[37px]  bg-[#EEF2F5] font-medium text-lg rounded-[15px]'>Cancel</button>
            <button type='submit' className='w-[90px] h-[37px]  bg-[#40A737] font-medium text-lg text-white rounded-[15px]'>{navigation.state == "submitting"? 'Saving...':'Save'}</button>
         </div> 
        </div> 


    </Form>
  )
}
