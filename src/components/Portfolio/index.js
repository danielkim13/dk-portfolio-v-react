import Project from "./Project";

export default function Portfolio() {
  const projectList = [
    {
      name: "WAG",
      profileImage: "dk.jpg",
      image: "wag.png",
      description: "An application where you can hire a dog walker or become an employee",
      gitHub: "https://github.com/danielkim13/wag-dog-walker-app",
      deployed: "https://secure-savannah-19572.herokuapp.com/",
      contributor: "DK, Danny Ramirez, Chris Backes",
    },
    {
      name: "City Girl",
      profileImage: "dk.jpg",
      image: "cityGirl.png",
      description: "An application where you can find a local brewery and nearest parking spots",
      gitHub: "https://github.com/danielkim13/code_breakers_repo",
      deployed: "https://danielkim13.github.io/code_breakers_repo/",
      contributor: "DK, Tamara Wilhite, Brahm Gicheru",
    },
    {
      name: "Budget Chaser",
      profileImage: "dk.jpg",
      image: "budgetChaser.png",
      description: "An application where you can track your budget. It has offline capabilities as well!",
      gitHub: "https://github.com/danielkim13/dk_proj_budget_chaser",
      deployed: "https://budget-chaser.herokuapp.com/",
      contributor: "DK",
    },
    {
      name: "All About Tech Blogs",
      profileImage: "dk.jpg",
      image: "allAboutTechNews.png",
      description: "An application where you can track your budget. It has offline capabilities as well!",
      gitHub: "https://github.com/danielkim13/dk_proj_all_about_tech_blogs",
      deployed: "https://all-about-tech-blogs.herokuapp.com/",
      contributor: "DK",
    },
    {
      name: "Run Buddy",
      profileImage: "dk.jpg",
      image: "runBuddy.jpeg",
      description: "A front-end application design for a targeted audience of runners",
      gitHub: "https://github.com/danielkim13/run-buddy",
      deployed: "https://danielkim13.github.io/run-buddy/",
      contributor: "DK",
    },
    {
      name: "Password Generator",
      profileImage: "dk.jpg",
      image: "passwordGen.png",
      description: "An application that generates a random password",
      gitHub: "https://github.com/danielkim13/dk_pass_gen_repo",
      deployed: "https://danielkim13.github.io/dk_pass_gen_repo/",
      contributor: "DK",
    },
  ];

  return (
    <section>
      <div className="columns m-3 is-mobile is-flex-wrap-wrap">
        <Project projectList={projectList[0]} />
        <Project projectList={projectList[1]} />
        <Project projectList={projectList[2]} />
        <Project projectList={projectList[3]} />
        <Project projectList={projectList[4]} />
        <Project projectList={projectList[5]} />
      </div>
    </section>
  );
}
