import Layouts from 'Layouts'
import { Categories, Dashboard, Login, MenuItem, Orders, PageNotFound, Tables, Users } from 'pages'
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
            <Route path="/categories" element={<Categories />} />
            <Route path="/menu-item" element={<MenuItem />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<PageNotFound />} />
         </Route>
      </Routes>
   )
}
