import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
  const [tab, setTab] = useState("about");

  useEffect(() => {
    document.title = capitalizeFirstLetter(tab);
  }, [tab]);

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
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
