import { Link } from "react-router-dom";

const Hotelinfo = () => {
  return (
    <section id="hotel-info" className="bg-dark">
      <div className="info-img" />
      <div className="info-text">
        <h2>
          <span className="text-primary">The History</span> Of Our Hotel
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi odit
          quae aliquam est doloremque. Modi reprehenderit eligendi rerum omnis
          reiciendis.
        </p>
        <Link to="/about">
          <a className="btn btn-light">Read More</a>
        </Link>
      </div>
    </section>
  );
};

export default Hotelinfo;
