import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Store from "./store/Store"

function App() {
  return (
    <div className="App text-center">
     <Provider store={Store}>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        
        </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
