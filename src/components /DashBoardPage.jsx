import React from 'react'
import {NavBar,NavigationBar} from "./index"
import { Outlet } from 'react-router-dom'
const DashBoardPage = () => {
  return (
    <div className=' h-screen'>
        <div>
        <NavBar/>
        </div>
        <div className='flex gap-7'>

            <NavigationBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardPage