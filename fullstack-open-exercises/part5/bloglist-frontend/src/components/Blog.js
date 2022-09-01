import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog, setBlogs, blogs }) => {
  const [showBlog, setShowBlog] = useState(false);
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle} className="blog">
      <div>
        <div className="title">{blog.title} </div>{" "}
        <div className="author">{blog.author} </div>
        <button onClick={() => setShowBlog((oldstate) => !oldstate)}>
          {showBlog ? "hide" : "show"}
        </button>
        <div style={showBlog ? { display: "" } : { display: "none" }}>
          <div>{blog.url}</div>
          <div>
            {blog.likes}{" "}
            <button
              onClick={() =>
                blogService
                  .update(blog.id, {
                    title: blog.title,
                    author: blog.author,
                    url: blog.url,
                    likes: blog.likes + 1,
                  })
                  .then((response) =>
                    setBlogs((oldBlogs) => [...oldBlogs, response])
                  )
              }
            >
              like
            </button>
          </div>
          {blog.user.name}
          <button
            onClick={() =>
              blogService
                .deleteBlog(blog.id)
                .then(
                  setBlogs(
                    blogs.filter((eachEmployee) => eachEmployee.id !== blog.id)
                  )
                )
            }
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
