import Nav from "./Nav";
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header({ tab, setTab }) {
  return (
    <header>
      <Nav tab={tab} setTab={setTab} />
    </header>
  );
}

export default Header;
