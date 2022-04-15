import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

import ContactForm from "./components/Contact";

function App() {
  const [tab, setTab] = useState("about");

  const renderPage = () => {
    switch (tab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };
  return (
    <>
      <Header tab={tab} setTab={setTab} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
