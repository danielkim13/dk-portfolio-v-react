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

  let test;

  switch (tab) {
    case "about":
      test = <About />;
      break;
    case "portfolio":
      test = <Projects />;
      break;
    case "contact":
      test = <ContactForm />;
      break;
    case "resume":
      test = <Resume />;
      break;
    default:
      test = null;
  }

  // const RenderPage = () => {
  //   switch (tab) {
  //     case "about":
  //       return <About />;
  //       break;
  //     case "portfolio":
  //       return <Portfolio />;
  //       break;
  //     case "contact":
  //       return <ContactForm />;
  //     case "resume":
  //       return <Resume />;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <>
      <Header tab={tab} setTab={setTab} />
      {/* <main>{RenderPage()}</main> */}
      <main>{test}</main>
      <Footer />
    </>
  );
}

export default App;
