import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-md-4">
      <div className="mb-4">
        <h5 className="fw-bold">Categories</h5>
        <ul className="list-group ">
          <li className="list-group-item">Crafts</li>
          <li className="list-group-item">Design</li>
          <li className="list-group-item">Handmade</li>
        </ul>
      </div>
      <div>
        <h5 className="fw-bold">Recent Posts</h5>
        <img src="src/assets/Gallery-img-5 (5).jpg" alt="Recent post" />
        <ul className="list-group">
          <li className="list-group-item">Going all-in with millennial design</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
