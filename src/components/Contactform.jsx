const Contactform = () => {
  return (
    <section id="contact-form" className="py-3">
      <div className="container">
        <h1 className="l-heading">
          Contact
          <span className="text-primary">Us</span>
        </h1>
        <p>Please contact us by filling in the fields below</p>
        <form action="progress.php">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" defaultValue={""} />
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
