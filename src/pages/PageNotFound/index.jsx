import React from 'react'
import './pageNotFound.css'
import { NotfoundImage } from 'assets'

function PageNotFound() {
   return <div className="content page_not_found_section">
      <div className='page_not_found'>
         <img src={NotfoundImage} style={{ maxWidth: "100%" }} />
      </div>
   </div>
}

export default PageNotFound
