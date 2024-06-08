import { Card } from 'components'
import React from 'react'
import DataTable from 'react-data-table-component'

function MenuItem() {
   const columns = [
      {
         name: 'Title',
         selector: (row) => row.title
      },
      {
         name: 'Year',
         selector: (row) => row.year
      }
   ]

   const data = [
      {
         id: 1,
         title: 'Beetlejuice',
         year: '1988'
      },
      {
         id: 2,
         title: 'Ghostbusters',
         year: '1984'
      }
   ]
   return (
      <div>
         <div className="top-header">
            <div className="left-top-header">
               <div className="page-heading">
                  <h3>MenuItem</h3>
               </div>
            </div>
            {/* <div className="right-top-header">
               <div className="action">
                  <button className="btn btn-primary-success add-action-btn">
                     <i className="fa fa-plus"></i>
                     {' Categories'}
                  </button>
               </div>
            </div> */}
         </div>
         <div className="content">
            <div className="all-table-list">
               <Card>
                  <DataTable columns={columns} data={data} pagination />
               </Card>
            </div>
         </div>
      </div>
   )
}

export default MenuItem
