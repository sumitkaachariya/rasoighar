import React from 'react'

function TopBar({ setisActiveMobile }) {
   return (
      <div className="">
         <div className="welcome-heading">
            <div className="mobile-menu-bar" onClick={() => setisActiveMobile(true)}>
               <i className="fa fa-bars"></i>
            </div>
            <h3>
               Hi... <span className="name">Kana Hotel</span>, Welcome to the rasoi ghar
            </h3>
         </div>
      </div>
   )
}

export default TopBar
