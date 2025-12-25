import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from '../Pages/Home/Home'
import Habits from '../Pages/Habits/Habits'
import NotFound from '../Pages/404Page/NotFound'
import UserProfile from '../Pages/Profiles/UserProfile'
import CreateHabit from '../Pages/HabitInput/CreateHabit'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
         index:true,
        element:<Home/>
      },
      {
        path:"/habits",
        element:<Habits/>
      },
      {
        path:"/profiles",
        element:<UserProfile/>
      },
      {
         path:"/create-habits",
         element:<CreateHabit/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
])

export default router;