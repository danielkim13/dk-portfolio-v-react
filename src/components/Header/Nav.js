import mainLogo from "../../assets/img/dk_sign_trans.png";

function Nav() {
  return (
    <nav className="navbar is-black p-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={mainLogo} width="120" height="36" />
        </a>
      </div>

      <div id="navMenu" className="navbar-menu is-active pr-4">
        <div className="navbar-end">
          <a className="navbar-item px-5">About Me</a>
          <a className="navbar-item px-5">Portfolio</a>
          <a className="navbar-item px-5">Contact</a>
          <a className="navbar-item px-5">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
