import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Index from '../screens/parent/Index';
export default function Mainroutes() {
  return (
   <Routes>
    <Route path='' element={<Index />}>

    </Route>
   </Routes>
  )
}
