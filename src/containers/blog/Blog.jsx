import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog02, blog05, blog03 } from "./import";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-header">
        <h1 className="gradient__text">
        A lot is happening, 
        We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog02}
            date="Oct 20, 2023"
            title="Is AI the future, Let's get ready for what's to come"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog03}
            date="Oct 20, 2023"
            title="Is AI the future, Let's get ready for what's to come"
          />
          <Article
            imgUrl={blog02}
            date="Oct 20, 2023"
            title="Is AI the future, Let's get ready for what's to come"
          />
          <Article
            imgUrl={blog03}
            date="Oct 20, 2023"
            title="Is AI the future, Let's get ready for what's to come"
          />
          <Article
            imgUrl={blog05}
            date="Oct 20, 2023"
            title="Is AI the future, Let's get ready for what's to come"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
