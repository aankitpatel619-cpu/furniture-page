import React from "react";
import HeroPoster from "../Components/HeroPoster";
import BlogList from "../Components/BlogList";
import Sidebar from "../Components/Sidebar";
import Services from "../Components/Services";

const Blog = () => {
  return (
    <>
      <HeroPoster title="Blog" breadcrumb="Home > Blog" />
      <div className="container d-flex gap-4 my-5">
        <div className="flex-grow-1">
          <BlogList />
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
      <Services />
    </>
  );
};

export default Blog;
