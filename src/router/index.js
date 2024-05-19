import Layouts from 'Layouts'
import { Dashboard, Login, PageNotFound, Tables } from 'pages'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function Router() {
   return (
      <Routes>
         <Route path="/auth/login" element={<Login />} />
         <Route path="/" element={<Layouts />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="*" element={<PageNotFound />} />
         </Route>
      </Routes>
   )
}
