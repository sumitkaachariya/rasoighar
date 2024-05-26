import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'
import { useOutsideClick } from 'Hooks'

function Layouts() {
   const [isActiveMobile, setisActiveMobile] = useState(false)
   const ref = useOutsideClick(() => setisActiveMobile(false))
   return (
      <div className="template-pages">
         <div className="main-content" ref={ref}>
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
