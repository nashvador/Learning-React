import { useState } from "react";

const Blog = ({ blog }) => {
  const [showBlog, setShowBlog] = useState(false);
  console.log(blog);
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={() => setShowBlog((oldstate) => !oldstate)}>
          {showBlog ? "hide" : "show"}
        </button>
        <div style={showBlog ? { display: "" } : { display: "none" }}>
          <div>{blog.url}</div>
          <div>
            {blog.likes} <button>like</button>
          </div>
          {blog.user.name}
        </div>
      </div>
    </div>
  );
};

export default Blog;
