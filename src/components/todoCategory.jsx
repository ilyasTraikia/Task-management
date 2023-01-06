import React, { useEffect } from 'react'
import {add,points} from '../assets'
import {TodoComponent} from './index/index'
import './style/styles.css'

export default function TodoCategory(props) {

  //console.log(props.tasks)

  useEffect(()=> {

    var modal = document.getElementById("myModal")


    // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }





}


  },[])


  function openModal() {
      var modal = document.getElementById("myModal")
      let firstChild = modal.firstChild
      firstChild.id = props.cate
      modal.style.display = "block"
  }


  return (

    <div className='flex flex-col space-y-[24px] w-full md:w-[40%] p-[24px] bg-[#EEF2F5] transition-all  duration-300'>
      {/* todo category heading */}
      <div className='flex flex-row justify-between items-center'>
          <div className='font-medium text-base'>{props.category}</div>
          <div className='flex flex-row space-x-4'>
            <button onClick={openModal}><img src={add} alt="add" /></button>
            <button><img src={points} alt="more" /></button>
          </div>
      </div>





     {/* The todo component */}
      <div className='flex flex-col space-y-4 transition-all  duration-300'>
       
            {props.tasks.map((e)=> {

            return <TodoComponent task = {e} key={e.id} othercat= {props.otherCate} />

            })}
          
         
         
        
      </div>



      


    </div>
  )
}
