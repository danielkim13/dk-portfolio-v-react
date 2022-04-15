import myResume from "../../assets/doc/Daniel_Kim_Resume.pdf";

function Resume() {
  const proficiency = [
    {
      name: "HTML5",
      category: "Front-End",
    },
    {
      name: "CSS3",
      category: "Front-End",
    },
    {
      name: "JavaScript",
      category: "Front-End",
    },
    {
      name: "jQuery",
      category: "Front-End",
    },
    {
      name: "Bootstrap",
      category: "Front-End",
    },
    {
      name: "Bulma",
      category: "Front-End",
    },
    {
      name: "React",
      category: "Front-End",
    },
    {
      name: "Ajax/Fetch",
      category: "Front-End",
    },
    {
      name: "APIs",
      category: "Front-End",
    },
    {
      name: "Node.js",
      category: "Back-End",
    },
    {
      name: "Express.js",
      category: "Back-End",
    },
    {
      name: "REST",
      category: "Back-End",
    },
    {
      name: "ES6",
      category: "Back-End",
    },
    {
      name: "Handlebars.js",
      category: "Back-End",
    },
    {
      name: "Object Oriented Programming (OOP)",
      category: "Paradigm",
    },
    {
      name: "Model-View-Controller (MVC)",
      category: "Paradigm",
    },
    {
      name: "Test Driven Development (TDD)",
      category: "Paradigm",
    },
    {
      name: "Progressive Web Application (PWA)",
      category: "Paradigm",
    },
    {
      name: "MySql",
      category: "Database",
    },
    {
      name: "Sequelize",
      category: "Database",
    },
    {
      name: "MongoDB",
      category: "Database",
    },
    {
      name: "Mongoose",
      category: "Database",
    },
    {
      name: "GraphQL",
      category: "Database",
    },
    {
      name: "Apollo",
      category: "Database",
    },
    {
      name: "SQL",
      category: "Database",
    },
    {
      name: "Git",
      category: "Dev Tool",
    },
    {
      name: "NPM",
      category: "Dev Tool",
    },
    {
      name: "Jest",
      category: "Dev Tool",
    },
    {
      name: "Webpack",
      category: "Dev Tool",
    },
  ];

  const frontEnd = proficiency.filter((data) => data.category === "Front-End");
  const backEnd = proficiency.filter((data) => data.category === "Back-End");
  const database = proficiency.filter((data) => data.category === "Database");
  const paradigm = proficiency.filter((data) => data.category === "Paradigm");
  const devTool = proficiency.filter((data) => data.category === "Dev Tool");

  return (
    <>
      <section className="columns mt-3 is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <p className="is-size-3 has-text-centered">Download My Resume</p>
          <a className="is-flex is-justify-content-center pt-5" href={myResume} download>
            <i className="fa-solid fa-file-pdf fa-2xl"></i>
          </a>
        </div>
      </section>
      <section className="columns is-justify-content-center is-mobile">
        <p className="is-size-4 pt-6">Proficiencies</p>
      </section>
      <section className="columns is-justify-content-around is-flex-wrap-wrap is-mobile">
        <div className="column is-mobile has-text-centered">
          <p className="is-size-4">
            <u>Front-End</u>
          </p>
          {frontEnd.map((data) => (
            <p key={data.name}>{data.name}</p>
          ))}
        </div>
        <div className="column is-mobile has-text-centered">
          <p className="is-size-4">
            <u>Back-End</u>
          </p>
          {backEnd.map((data) => (
            <p key={data.name}>{data.name}</p>
          ))}
        </div>
        <div className="column is-mobile has-text-centered">
          <p className="is-size-4">
            <u>Database</u>
          </p>
          {database.map((data) => (
            <p key={data.name}>{data.name}</p>
          ))}
        </div>
        <div className="column is-mobile has-text-centered">
          <p className="is-size-4">
            <u>Paradigm</u>
          </p>
          {paradigm.map((data) => (
            <p key={data.name}>{data.name}</p>
          ))}
        </div>
        <div className="column is-mobile has-text-centered">
          <p className="is-size-4">
            <u>Dev Tool</u>
          </p>
          {devTool.map((data) => (
            <p key={data.name}>{data.name}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default Resume;
