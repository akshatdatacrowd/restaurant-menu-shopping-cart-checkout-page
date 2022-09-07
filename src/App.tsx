import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>  
      </Router>
      
    </>
  );
}

export default App;
