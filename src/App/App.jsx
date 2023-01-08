import './App.css'
import {Sidebar} from '../components/index'
import { Outlet,useNavigation} from "react-router-dom";



function App() {


  const navigation = useNavigation()

 



  return (
    <div className='flex flex-row'>
      <Sidebar/>
       <div className='hidden lg:block min-w-[200px]'></div>
       {navigation.state==='loading'? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>:<Outlet/> }
    </div>
  )
}

export default App
