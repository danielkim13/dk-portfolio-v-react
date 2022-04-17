import profilePhoto from "../../assets/img/dk_profile.jpg";
import "../../components/About/about.css";

function About() {
  return (
    <section className="columns is-mobile">
      <div className="column is-flex is-flex-direction-column">
        <h2 className="has-text-centered my-3 is-size-2">About Me</h2>
        <img id="profile-img" className="is-align-self-center m-3" src={profilePhoto} alt="Daniel Kim profile photo" width="200px" style={{ border: "5px solid #50808E" }} />
        <p className="column is-three-fifths is-offset-one-fifth is-size-5" style={{ backgroundColor: "#AF9164", color: "#F2F7F2" }}>
          Full-stack developer with recently earned a certificate from George Washington University Coding Boot Camp which focused on overall web application development skills including, but not limited to, HTML, CSS, JavaScript, Ajax, APIs, ES6,
          Node.js, Express.js, various paradigms (Object Oriented Programming, Test Driven Development, Model-View-Controller, and Progressive Web Application), SQL and noSQL databases with Object Relational/Document Mapping layers (Sequelize and
          Mongoose), and various frameworks (Bootstrap, Bulma, Handlebars, and React). Educated in mathematics and leadership at Virginia Tech and has extensive experience in software testing, national security intelligence, all-source intelligence
          operations, and military tactical operations in challenging environments which brings many unique perspectives to a project. Passionate about problem-solving, and enhancing product owner’s experience. Possesses a strong work ethics,
          uncompromising devotion, self-motivation, as well as interpersonal skills necessary for a team oriented environment. I would like to apply creative problem solving and acquired skills through distinctive experiences to join a great
          organization to support and increase project productivity as well as satisfying and fulfilling customer requirements.
        </p>
      </div>
    </section>
  );
}

export default About;
