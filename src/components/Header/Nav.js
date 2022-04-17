import mainLogo from "../../assets/img/dk_sign_trans.png";
import "../Header/nav.css";

function Nav({ tab, setTab }) {
  return (
    <nav className="navbar is-black p-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={mainLogo} alt="DK signature" width="120" height="36" />
        </a>
      </div>

      <div id="navMenu" className="navbar-menu is-active pr-4">
        <div className="navbar-end">
          <p className={tab === "about" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("about")}>About Me</span>
          </p>
          <p className={tab === "portfolio" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("portfolio")}>Portfolio</span>
          </p>
          <p className={tab === "contact" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("contact")}>Contact</span>
          </p>
          <p className={tab === "resume" ? "navbar-item px-5 has-text-success trans" : "navbar-item px-5"}>
            <span onClick={() => setTab("resume")}>Resume</span>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
