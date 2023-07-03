import React, { useState,useEffect } from 'react'
import {codesandbox,database,layout,grid,settings,sidebarBtn,close} from '../assets/index'
import { NavLink} from "react-router-dom";
   
export default function Sidebar() {


  const [sidebarOpened,setSidebarOpened] = useState(false);

  
  const handleResize = () => {
  if (window.innerWidth < 1024) {
      setSidebarOpened(false)
   } 
  }


  useEffect(() => {
    window.addEventListener("resize", handleResize)
  },[])

  



  if(sidebarOpened) {
  
    return (
      <div  className='bg-white translate-x-[0px] lg:translate-x-[0px]  transition-transform  duration-300 fixed lg:flex flex-col h-full  min-w-[200px] items-center pt-8 shadow-side-bar'>

       <button className='relative left-[110%]' onClick={()=> {setSidebarOpened(false)}} ><img src={close} alt="close" /></button>
        {/* logo */}
    
        <div className='w-full font-bold'>
          <NavLink onClick={()=> {setSidebarOpened(false)}} to={"/"} className='flex flex-row pl-7  space-x-4'>
           <img src={codesandbox} alt="codesandbox" />
           <span>Pro Manage</span>
          </NavLink>
        </div>
  
  
  
  
        {/* sidebar items */}
       
         {/* <NavLink onClick={()=> {setSidebarOpened(false)}} to={`/dashboard`} className={({isActive,isPending})=>  
          isActive
          ?"mt-[55px] active-sidebar-items-text"
          :"mt-[55px] inactive-sidebar-items-text"
           }
           >
           <img src={grid} alt="grid" />
           <span>Dashboard</span>
         </NavLink> */}
       

     

        
         <NavLink onClick={()=> {setSidebarOpened(false)}} to={`/board`} className={({isActive,isPending})=>  
          isActive
          ?"mt-[60px] active-sidebar-items-text"
          :"mt-[60px] inactive-sidebar-items-text"
           }
           >
           <img src={layout} alt="layout" />
           <span>Board</span>
         </NavLink>

  
      
  
       
         <NavLink onClick={()=> {setSidebarOpened(false)}} to={`/analytics`} className={({isActive,isPending})=>  
          isActive
          ?"mt-7 active-sidebar-items-text"
          :"mt-7 inactive-sidebar-items-text"
           }
           >
           <img src={database} alt="database" />
           <span>Analytics</span>
         </NavLink>
       
  
  
       
         <NavLink onClick={()=> {setSidebarOpened(false)}} to={`/settings`} className={({isActive,isPending})=>  
          isActive
          ?"mt-7 active-sidebar-items-text"
          :"mt-7 inactive-sidebar-items-text"
           }
           >
           <img src={settings} alt="settings" />
           <span>Settings</span>
         </NavLink>
        
  
      
      </div>
    )



  } else {


    return (
      <div  className='bg-white -translate-x-[200px] lg:translate-x-[0px]  transition-transform  duration-300 fixed lg:flex flex-col h-full  min-w-[200px] items-center pt-8 shadow-side-bar'>
         {/* The button that opens the sidebar */}
         <div className='block  absolute lg:hidden  top-[5%] left-[110%] '>
          <button className='w-[25px] h-[25px]' onClick={()=> {setSidebarOpened(true)}}><img src={sidebarBtn} alt="open" /></button>
        </div>
        {/* logo */}
       
        <div className='w-full font-bold'>
          <NavLink to={"/"} className='flex flex-row pl-7  space-x-4'>
           <img src={codesandbox} alt="codesandbox" />
           <span>Pro Manage</span>
          </NavLink>
        </div>
  
  
  
  
        {/* sidebar items */}
       
         {/* <NavLink to={`/dashboard`} className={({isActive,isPending})=>  
          isActive
          ?"mt-[55px] active-sidebar-items-text"
          :"mt-[55px] inactive-sidebar-items-text"
           }
           >
           <img src={grid} alt="grid" />
           <span>Dashboard</span>
         </NavLink> */}
       

     

        
         <NavLink to={`/board`} className={({isActive,isPending})=>  
          isActive
          ?"mt-[60px] active-sidebar-items-text"
          :"mt-[60px] inactive-sidebar-items-text"
           }
           >
           <img src={layout} alt="layout" />
           <span>Board</span>
         </NavLink>

  
      
  
       
         <NavLink to={`/analytics`} className={({isActive,isPending})=>  
          isActive
          ?"mt-7 active-sidebar-items-text"
          :"mt-7 inactive-sidebar-items-text"
           }
           >
           <img src={database} alt="database" />
           <span>Analytics</span>
         </NavLink>
       
  
  
       
         <NavLink to={`/settings`} className={({isActive,isPending})=>  
          isActive
          ?"mt-7 active-sidebar-items-text"
          :"mt-7 inactive-sidebar-items-text"
           }
           >
           <img src={settings} alt="settings" />
           <span>Settings</span>
         </NavLink>
        
  
  
      
      </div>
    )



  }

  
}
