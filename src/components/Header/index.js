import Nav from "./Nav";

function Header({ tab, setTab }) {
  return (
    <header>
      <Nav tab={tab} setTab={setTab} />
    </header>
  );
}

export default Header;
