import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ProductPage from './components/ProductPage'
import { CartProvider } from './components/CartContext'
import CartDrawer from './components/CartDrawer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <CartDrawer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
