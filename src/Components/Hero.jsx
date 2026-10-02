import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-img">
          <span><img src="src/assets/Gallery-img-1 (1).jpg" alt="Hero Image" /></span>
        </div>
        <div className="hero-content">
          <p className="small-heading">New Arrivals</p>
          <h1>
            Discover Our <br />
            New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button>Shop Now</button>
        </div>
      </section>
    </>
  );
}
