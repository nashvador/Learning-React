import axios from "axios";
import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [specificBlog, setSpecificBlog] = useState([]);

  useEffect(() => {
    axios.get("api/blogs").then((blogs) => setBlogs(blogs));
  }, []);

  console.log(blogs);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  const displayBlogs = () => {
    const getBlogsByName = blogs.map((eachBlog) => console.log(eachBlog.user));
  };

  return (
    <div>
      {user === null ? loginForm() : displayBlogs()}
      <h2>blogs</h2>
      {/* {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))} */}
    </div>
  );
};

export default App;
