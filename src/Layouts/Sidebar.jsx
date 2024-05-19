import { Logo } from 'assets'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuItems } from './menuItem'

function Sidebar({ isActiveMobile, setisActiveMobile }) {
   const [activeItem, setActiveItem] = useState(null)
   const location = useLocation()

   useEffect(() => {
      // Find the index of the current route in the menu items
      const index = menuItems.findIndex((item) => item.path === location.pathname)
      setActiveItem(index)
   }, [location.pathname])

   return (
      <div>
         <aside className={`rasoi-side-bar ${isActiveMobile ? 'active' : ''}`}>
            <div className="logo-section">
               <Link to={'/'} title="logo">
                  <img src={Logo} />
               </Link>
            </div>
            <nav className="nav-bar">
               <ul>
                  {menuItems &&
                     menuItems.map((item, i) => {
                        return (
                           <li
                              className={`${activeItem === i ? 'active' : ''}`}
                              key={i}
                              onClick={() => {
                                 setisActiveMobile(false)
                              }}>
                              <Link to={item.path}>
                                 <i className={`${item.faIcon}`}></i>
                                 <span>{item.name}</span>
                              </Link>
                           </li>
                        )
                     })}
               </ul>
            </nav>
         </aside>
      </div>
   )
}

export default Sidebar
