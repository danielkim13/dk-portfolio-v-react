import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";

import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <ContactForm />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
