import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Shop from "../Pages/Shop";
import "./App.css";
import Blog from "../Pages/Blog";


function RedirectOnRefresh() {
  const navigate = useNavigate();

  useEffect(() => {
    const [navEntry] = performance.getEntriesByType("navigation");
    if (navEntry?.type === "reload") {
      navigate("/", { replace: true });
    }
  }, []);

  return null; // renders nothing
}




export default function App() {


  return (
    <BrowserRouter>
    <RedirectOnRefresh />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

