import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Board,ErrorPage,Analytics,Dashboard,Settings,PageIndex} from './routes/index'
import './style/index.css'
import {loader as BoardTasksLoader} from './routes/Board'
import {action as taskCreateAction} from './components/AddtodoModal'
import {action as destroyAction} from './routes/destroy'
import {action as updateAction} from './components/todoComponent'
import {action as updateTaskAction} from './components/UpdateTask'



const router = createBrowserRouter([
   {
      path:"/",
      element: <App />,
      errorElement:<ErrorPage />,
      children: [
        {
          index:true,
          element:<PageIndex/>
        },
        {
          path:"board",
          element:<Board/>,
          loader:BoardTasksLoader,
          action:taskCreateAction,
          children : [
              {
                path:":taskId/destroy",
                action:destroyAction
              },
              {
                path:":taskId/update/:cateId",
                action:updateAction
              },
               {
                path: "updateTask/:taskId",
                action: updateTaskAction
               }
          ]
        },
        // {
        //   path:"dashboard",
        //   element:<Dashboard />
        // },
        {
          path:"analytics",
          element:<Analytics />
        },
        {
          path:"settings",
          element:<Settings />
        }
       
      ]
   }
])







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
