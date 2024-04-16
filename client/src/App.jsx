import Home from "./Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
