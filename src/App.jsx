// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import Home from "./Pages/Home/Home";

import Sobre from "./Pages/Sobre/Sobre";
import Times from "./Pages/Times/Times";
import Quadras from "./Pages/Quadras/Quadras";
import "./GlobalStyles.scss";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Times" element={<Times />} />
          <Route path="/Quadras" element={<Quadras />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
