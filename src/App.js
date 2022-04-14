import React, { useState } from 'react';
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

import ContactForm from './components/Contact';

function App() {

  return (
    <div>
      <Header />
      <>
      <ContactForm />
      </>
      <Footer />
    </div>
  );
}

export default App;
