function Project({ name, profileImage, image, description, gitHub, deployed, contributor }) {
  return (
    <div className="card column m-1">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={require(`../../assets/img/${image}`)} alt="Project webpage snap" />
        </figure>
      </div>
      <div className="card-content is-flex is-flex-wrap-wrap">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={require(`../../assets/img/${profileImage}`)} alt="DK profile pic" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">
              <i>Contributors: {contributor}</i>
            </p>
          </div>
        </div>

        <div className="content has-text-centered">
          <p>{description}</p>
          <hr />
          <a href={gitHub} target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
          <br />
          <a href={deployed} target="_blank" rel="noreferrer">
            Deployed Webpage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
