import Project from "./Project";
import { projects } from "./constants.js";

export default function Projects() {
  return (
    <section className="columns m-3 is-mobile is-flex-wrap-wrap">
      {projects?.map((project) => (
        <Project key={project.name} name={project.name} profileImage={project.profileImage} image={project.image} description={project.description} gitHub={project.gitHub} deployed={project.deployed} contributor={project.contributor} />
      ))}
    </section>
  );
}
