import React, { useState } from 'react'
import './table.css'
import { RGModal } from 'components'

function Tables() {
   const [openTableModal, setOpenTableModal] = useState(false)
   return (
      <div>
         <div className="top-header">
            <div className="left-top-header">
               <div className="page-heading">
                  <h3>Table</h3>
               </div>
            </div>
            <div className="right-top-header">
               <div className="action">
                  <button
                     className="btn btn-primary-success add-action-btn"
                     onClick={() => {
                        setOpenTableModal(true)
                     }}>
                     <i className="fa fa-plus"></i>
                     {' Table'}
                  </button>
               </div>
            </div>
         </div>
         <div className="content">
            <div className="all-table-list">
               <div className="card">
                  <div className="card-body">
                     <div className="main-table-list">
                        <div className="table-list">
                           <div className="table-item">
                              <label>Table 1</label>
                              <a href="#" className="btn btn-success">
                                 view
                              </a>
                           </div>
                        </div>
                        <div className="table-list">
                           <div className="table-item">
                              <label>Table 1</label>
                              <a href="#" className="btn btn-success">
                                 view
                              </a>
                           </div>
                        </div>
                        <div className="table-list">
                           <div className="table-item">
                              <label>Table 1</label>
                              <a href="#" className="btn btn-success">
                                 view
                              </a>
                           </div>
                        </div>
                        <div className="table-list">
                           <div className="table-item">
                              <label>Table 1</label>
                              <a href="#" className="btn btn-success">
                                 view
                              </a>
                           </div>
                        </div>
                        <div className="table-list">
                           <div className="table-item">
                              <label>Table 1</label>
                              <a href="#" className="btn btn-success">
                                 view
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {openTableModal && (
            <RGModal
               title={'New Table'}
               onClose={() => {
                  setOpenTableModal(false)
               }}>
               <div class="form">
                  <div class="form-group">
                     <label for="formtableName">Table Name/ Table No: </label>
                     <input
                        class="form-control"
                        type="text"
                        name="email"
                        id="formtableName"
                        placeholder="Ex. Table 1"
                     />
                  </div>
                  <div class="button-group text-center">
                     <button type="button" name="login" class="btn btn-success save-btn">
                        save
                     </button>
                  </div>
               </div>
            </RGModal>
         )}
      </div>
   )
}

export default Tables
