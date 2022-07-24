import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Hotel from "./Pages/Hotels/Hotel.jsx";
import Home from "./Pages/Home/Home.jsx";
import List from "./Pages/List/List.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Header /> */}
    </>
  );
}

export default App;
