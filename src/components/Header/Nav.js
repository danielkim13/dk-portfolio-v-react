import mainLogo from "../../assets/img/dk_sign_trans.png";

function Nav() {
  return (
    <nav className="navbar is-black p-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={mainLogo} width="120" height="36" />
        </a>
      </div>

      <div id="navMenu" className="navbar-menu is-active pr-2">
        <div className="navbar-end">
          <a className="navbar-item">About Me</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Portfolio</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Project one</a>
              <a className="navbar-item">Project two</a>
              <a className="navbar-item">Project three</a>
              <a className="navbar-item">Project four</a>
              <a className="navbar-item">Project five</a>
              <a className="navbar-item">Project six</a>
            </div>
          </div>

          <a className="navbar-item">Contact</a>

          <a className="navbar-item">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
