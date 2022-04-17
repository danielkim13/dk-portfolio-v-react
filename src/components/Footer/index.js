export default function Footer() {
  const url = {
    github: "https://github.com/danielkim13",
    linkedin: "https://www.linkedin.com/in/daniel-k-85698a112/",
    facebook: "https://www.facebook.com/danny.kim.73113528",
    instagram: "https://www.instagram.com/proj._dk_photography"
  };

  return (
    <footer className="footer mt-5">
      <div className="columns is-mobile content has-text-centered">
        <div className="column is-6 has-text-centered p-3 is-flex is-align-items-center">
          <p>
            <strong>&copy; 2022</strong> Daniel Kim. All rights reserved. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
          </p>
        </div>
        <div className="column is-3 is-offset-3 has-text-centered p-3">
          <p>Social Connect</p>
          <div className="is-flex is-justify-content-center is-justify-content-space-evenly">
            <a href={url.github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a href={url.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href={url.facebook} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f fa-xl"></i>
            </a>
            <a href={url.instagram} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
