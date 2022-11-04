import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>  
      <Footer />
      </Router>
      
    </>
  );
}

export default App;
