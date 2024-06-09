import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useOutsideClick } from 'Hooks'
import { useSelector } from 'react-redux'

function Layouts() {
   const [isActiveMobile, setisActiveMobile] = useState(false)
   const ref = useOutsideClick(() => setisActiveMobile(false))
   const authReducer = useSelector((state) => state.auth)
   const navigate = useNavigate()

   useEffect(() => {
      let user = localStorage.getItem('user')
      let userObj = JSON.parse(user)

      if (!userObj?.isLogin) {
         navigate('/auth/login')
      }
      return () => {}
   }, [authReducer])

   if (!authReducer.isLogin) {
      return null
   }
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
