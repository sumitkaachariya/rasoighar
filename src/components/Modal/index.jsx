import React, { useEffect } from 'react'

function RGModal(props) {
   useEffect(() => {
      document.body.classList.add('is-open-modal')
      return () => {
         document.body.classList.remove('is-open-modal')
      }
   }, [])

   const { onClose, title, children } = props
   return (
      <div>
         <div className="custom-model-main model-open">
            <div className="custom-model-inner">
               <div className="custom-model-wrap">
                  <div className="custom-model-top-bar">
                     <div className="heding">
                        <h4>{title}</h4>
                     </div>
                     <div className="close-btn" onClick={onClose}>
                        <i className="fa fa-times"></i>
                     </div>
                  </div>
                  <div className="pop-up-content-wrap">{children}</div>
               </div>
            </div>
            <div className="bg-overlay"></div>
         </div>
      </div>
   )
}

export default RGModal
