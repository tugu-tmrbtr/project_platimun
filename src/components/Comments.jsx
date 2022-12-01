import { person_1, person_2 } from "../assets";

const Comments = () => {
  return (
    <section id="comments" className="py-3">
      <div className="container">
        <h2 className="l-heading">Comments</h2>
        <div className="comment bg-primary">
          <img src={person_1} alt="person-1" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            temporibus quasi vitae earum, dolorum quam itaque reiciendis eum
            perferendis dolorem rem iure nihil excepturi alias delectus
            molestiae exercitationem, aliquid repellat?
          </p>
        </div>
        <div className="comment bg-primary">
          <img src={person_2} alt="person-2" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            temporibus quasi vitae earum, dolorum quam itaque reiciendis eum
            perferendis dolorem rem iure nihil excepturi alias delectus
            molestiae exercitationem, aliquid repellat?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comments;
