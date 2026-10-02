import React from "react";

export default function HeroPoster({ title, breadcrumb }) {
  return (
    <section className="text-center bg-light py-5">
      <h1 className="fw-bold display-4">{title}</h1>
      <p className="text-muted">{breadcrumb}</p>
      <div className="mt-4">
        <img
          className="img-fluid rounded"
          src="src/assets/Gallery-img-1 (1).jpg"
          alt="Banner placeholder"
        />
      </div>
      <button className="btn btn-danger mt-3 px-4">Shop Now</button>
    </section>
  );
}
