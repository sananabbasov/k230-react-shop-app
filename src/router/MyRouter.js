import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import DetailPage from '../pages/DetailPage'

function MyRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default MyRouter