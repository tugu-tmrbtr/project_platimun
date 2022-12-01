import { photo_2 } from "../assets";

const Aboutinfo = () => {
  return (
    <section id="about-info" className="bg-light py-3">
      <div className="container">
        <div className="info-left">
          <h1 className="l-heading">
            <span className="text-primary">Platinum</span> Hotel
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            natus officiis eaque laudantium adipisci aspernatur numquam corrupti
            veritatis optio magni repellendus, et non impedit! Fugit porro
            cumque totam voluptatem earum sit quod quibusdam dicta laboriosam.
            Dolores commodi magnam tenetur rem!
          </p>
        </div>
        <div className="info-right">
          <img src={photo_2} alt="Hotel" />
        </div>
      </div>
    </section>
  );
};

export default Aboutinfo;
