import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
  const [tab, setTab] = useState("about");

  useEffect(() => {
    document.title = capitalizeFirstLetter(tab);
  }, [tab]);

  const RenderPage = () => {
    switch (tab) {
      case "about":
        return <About />;
        break;
      case "portfolio":
        return <Projects />;
        break;
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
      <main>{RenderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
