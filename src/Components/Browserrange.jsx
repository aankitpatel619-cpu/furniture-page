import React from "react";

const categories = [
  {
    id: 1,
    name: "Dinning",
  },
  {
    id: 2,
    name: "Living",
  },
  {
    id: 3,
    name: "Bedroom",
  },
];

export default function Browserrange() {
  return (
    <>
      <section className="range-section">
        <div classname="section-heading">
          <h2>Browser Range</h2>
          <p>Explore our wide range of furniture and home decor items.</p>
        </div>
        <div className="category-container row g-3">
          {categories.map((category) => (
            <div key={category.id} className="category-card col-12 col-md-4">
              <div className="image-placeholder">
                <span>
                  <img
                    src="/src/assets/Gallery-img-4 (4).jpg"
                    alt={category.name}
                  />
                </span>
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
