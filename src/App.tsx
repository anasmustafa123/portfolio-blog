import "./App.css";

import { Blog } from "./Routes/Blog";
import { Routes, Route } from "react-router-dom";
import { View } from "./Routes/View";
import { Admin } from "./Routes/Admin";
import Typed from "typed.js";
function App() {
  return (
    <>
      <Routes>
        <Route
        // @ts-ignore
          loader={() => {
            const types = new Typed(".multiple-text", {
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
            });
          }}
          element={<View />}
          path="/"
        />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Blog />} path="/blog"></Route>
      </Routes>
    </>
  );
}

export default App;
