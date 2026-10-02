import React from "react";

const BlogCard = ({ title, author, date, category, text }) => {
  return (
    <div className="blog-card border-0 shadow-sm mb-4">
      <img src="src/assets/Gallery-img-2 (2).jpg" alt={title} className="card-img-top rounded" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="text-muted small">
          By {author} | {date} | {category}
        </p>
        <p className="card-text">{text}</p>
        <a href="#" className="text-primary">Read more</a>
      </div>
    </div>
  );
};

export default BlogCard;
