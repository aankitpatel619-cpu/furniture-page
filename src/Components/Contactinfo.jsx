import React from "react";

const ContactInfo = () => {
  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-4">Get In Touch With Us</h2>
      <p className="text-muted mb-5">
        For more information about our product & services, please feel free to drop us an email.
        Our staff will always be there to help you out. Do not hesitate!
      </p>
      <div className="row">
        <div className="col-md-4">
          <h5 className="fw-bold">Address</h5>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
        <div className="col-md-4">
          <h5 className="fw-bold">Phone</h5>
          <p>Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
        </div>
        <div className="col-md-4">
          <h5 className="fw-bold">Working Time</h5>
          <p>Mon–Fri: 9:00 – 22:00<br/>Sat–Sun: 9:00 – 21:00</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
