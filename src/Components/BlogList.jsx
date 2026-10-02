import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const posts = [
    { title: "Going all-in with millennial design", author: "Admin", date: "14 Oct 2022", category: "Wood", text: "Lorem ipsum dolor sit amet..." },
    { title: "Going all-in with millennial design", author: "Admin", date: "14 Oct 2022", category: "Wood", text: "Lorem ipsum dolor sit amet..." },
    { title: "Going all-in with millennial design", author: "Admin", date: "14 Oct 2022", category: "Wood", text: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
      <div className="pagination d-flex gap-2 mt-4">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default BlogList;
