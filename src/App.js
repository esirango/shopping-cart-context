import React from "react";

// react router dom
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

// Products
import Store from "./components/Store";

// Detail Component
import ProductDetail from "./components/ProductDetail";
import CartContextProvider from "./context/CartContextProvider";

//components
import ShopCart from "./components/ShopCart";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
