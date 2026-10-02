import React from "react";

const ContactForm = () => {
  return (
    <section className="container my-5">
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="col-md-12">
          <label className="form-label">Subject (Optional)</label>
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="col-md-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="5" placeholder="Write your message"></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
