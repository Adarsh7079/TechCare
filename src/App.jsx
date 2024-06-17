import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {DashBoard, DashBoardPage, Jessica, NavBar} from "./components /index"

const App = () => {
  return (
   <div  className='bg-[#F6F7F8] w-full '>
     <div>
   
       <Routes>
          <Route path="/" element={<DashBoardPage/>}/>
         
          <Route path="/dashboardpage" element={<DashBoardPage/>}>
          <Route path="/dashboardpage/" element={<Jessica/>}/>
          </Route>
       
      </Routes>
    </div>
   </div>

  )
}

export default App