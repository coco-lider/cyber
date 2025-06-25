import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import ProductDetail from './components/ProductDetail'
import NotFound from './pages/NotFound'
import OrderList from './components/OrderList'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path='order' element={<OrderList/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
