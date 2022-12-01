import React from "react";
import { hotel, utensils, dumbbell } from "../assets";

const Features = () => {
  return (
    <section id="features">
      <div className="box bg-light">
        <img src={hotel} alt="fa-hotel" />
        <h3>Room</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          laboriosam.
        </p>
      </div>
      <div className="box bg-primary">
        <img src={utensils} alt="fa-utensils" />
        <h3>Restaurant</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          laboriosam.
        </p>
      </div>
      <div className="box bg-light">
        <img src={dumbbell} alt="fa-dumbbell" />
        <h3>Fitness</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          laboriosam.
        </p>
      </div>
    </section>
  );
};

export default Features;
