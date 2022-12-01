import { hotel, phone, envelope } from "../assets";

const Contactinfo = () => {
  return (
    <section id="contact-info" className="bg-dark">
      <div className="container">
        <div className="box">
          <img src={hotel} alt="fa-hotel" className="white" />
          <h3>Address</h3>
          <p>Ulaanbaatar, Bayanzurkh</p>
        </div>
        <div className="box">
          <img src={phone} alt="fa-phone" className="white" />
          <h3>Phone</h3>
          <p>(976) 5555-5555</p>
        </div>
        <div className="box">
          <img src={envelope} alt="fa-envelope" className="white" />
          <h3>E-Mail</h3>
          <p>info@platinum.mn</p>
        </div>
      </div>
    </section>
  );
};

export default Contactinfo;
