import mainLogo from "../../assets/img/dk_sign_trans.png";
import "../Header/nav.css";

function Nav({ tab, setTab }) {
  return (
    <nav className="navbar is-black p-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={mainLogo} width="120" height="36" />
        </a>
      </div>

      <div id="navMenu" className="navbar-menu is-active pr-4">
        <div className="navbar-end">
          <a className={tab === "about" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("about")}>About Me</span>
          </a>
          <a className={tab === "portfolio" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("portfolio")}>Portfolio</span>
          </a>
          <a className={tab === "contact" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("contact")}>Contact</span>
          </a>
          <a className={tab === "resume" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("resume")}>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
