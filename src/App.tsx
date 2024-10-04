import "./App.css";

import { Blog } from "./Routes/Blog";
import { Routes, Route } from "react-router-dom";
import { View } from "./Routes/View";
import { Admin } from "./Routes/Admin";
import Typed from "typed.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Chess Player",
        "Engineering Student",
        "book reader",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    try {
    
      // @ts-ignore
      const typed = new Typed(".multiple-text", options);

      // Cleanup function to destroy the Typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    } catch (error) {
      console.log(`found an error: {error}`);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route element={<View />} path="/" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Blog />} path="/blog"></Route>
      </Routes>
    </>
  );
}

export default App;
