import React from "react";
import "./App.css";
import { Navbar, Brand, Cta } from "./components";

import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;