import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      {/* Toast notifications root */}
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </>
  );
}

export default App;