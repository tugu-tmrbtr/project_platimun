import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="container showcase-container">
        <h1>
          <span className="text-primary">Enjoy</span> Your Stay
        </h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae
          labore, illo dolorum quo cum.
        </p>
        <Link to="/About">
          <a className="btn">About Our Hotel</a>
        </Link>
      </div>
    </section>
  );
};

export default Showcase;
