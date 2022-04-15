import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <ContactForm />

      <Footer />
    </>
  );
}

export default App;
