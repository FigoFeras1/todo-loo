import React from "react";
import Navbar from "./components/Navbar";

import "../static/styles.css";
import { Router } from "./Router";


export default function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}
