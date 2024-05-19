import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'

function Layouts() {
   const [isActiveMobile, setisActiveMobile] = useState(false)
   return (
      <div className="template-pages">
         <div className="main-content">
            <Sidebar isActiveMobile={isActiveMobile} setisActiveMobile={setisActiveMobile} />
         </div>
         <div className="rasoi-content">
            <TopBar setisActiveMobile={setisActiveMobile} />
            <Outlet />
         </div>
      </div>
   )
}

export default Layouts
