import React from 'react'

function RGModal(props) {
   const { onClose, title, children } = props
   return (
      <div>
         <div class="custom-model-main model-open">
            <div class="custom-model-inner">
               <div class="custom-model-wrap">
                  <div class="custom-model-top-bar">
                     <div class="heding">
                        <h4>{title}</h4>
                     </div>
                     <div class="close-btn" onClick={onClose}>
                        <i class="fa fa-times"></i>
                     </div>
                  </div>
                  <div class="pop-up-content-wrap">{children}</div>
               </div>
            </div>
            <div class="bg-overlay"></div>
         </div>
      </div>
   )
}

export default RGModal
