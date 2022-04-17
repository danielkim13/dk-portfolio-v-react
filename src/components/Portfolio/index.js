import testPhoto from "../../assets/img/wag.png";
import dk from "../../assets/img/dk.jpg"

export default function Portfolio() {
  return (
    <section>
      <div className="columns m-5 is-mobile">
        <div className="column m-2 is-3 is-flex is-flex-wrap-wrap">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={testPhoto} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={dk} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">WAG</p>
                  <p className="subtitle is-6">@danielkim13</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
                <hr />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
