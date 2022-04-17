import Project from './Project'

export default function Portfolio() {
    const projectList = [
        {
            name: 'WAG',
            profileImage: "dk.jpg",
            image: "wag.png",
            description: "An application where you can hire a dog walker or become an employee",
            gitHub: "https://github.com/danielkim13/wag-dog-walker-app",
            deployed: "https://secure-savannah-19572.herokuapp.com/",
            contributor: "Daniel Kim, Danny Ramirez, Chris Backes"
        },
    ]

  return (
    <section>
      <div className="columns m-5 is-mobile">
        <Project />
      </div>
    </section>
  );
}
