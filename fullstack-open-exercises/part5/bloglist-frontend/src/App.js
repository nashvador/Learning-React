import { useState, useEffect, useMemo } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";

const LoginForm = ({
  handleLogin,
  setUsername,
  setPassword,
  username,
  password,
}) => (
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

const BlogForm = ({ onLogOut, blogs, user }) => {
  // useeffect and setState

  const filteredBlogs = blogs.filter(
    (eachBlog) => eachBlog.user.name == user.name
  );
  console.log(filteredBlogs);
  console.log(blogs);

  return (
    <div>
      {user.name} is logged in <button onClick={onLogOut}>logout</button>
      {filteredBlogs.map((eachFilteredBlog) => (
        <div key={eachFilteredBlog.id}>
          {eachFilteredBlog.title}, {eachFilteredBlog.author},{" "}
          {eachFilteredBlog.url}{" "}
        </div>
      ))}
    </div>
  );
};

const NewBlogForm = ({
  handleAddBlog,
  setTitle,
  setAuthor,
  setUrl,
  setLikes,
  title,
  author,
  url,
  likes,
}) => (
  <form onSubmit={handleAddBlog}>
    <div>
      Title
      <input
        type="text"
        value={title}
        name="title"
        onChange={({ target }) => setTitle(target.value)}
      />
    </div>
    <div>
      Author
      <input
        type="text"
        value={author}
        name="author"
        onChange={({ target }) => setAuthor(target.value)}
      />
    </div>
    <div>
      Url
      <input
        type="text"
        value={url}
        name="url"
        onChange={({ target }) => setUrl(target.value)}
      />
    </div>
    <div>
      Likes
      <input
        type="number"
        value={likes}
        name="likes"
        onChange={({ target }) => setLikes(target.value)}
      />
    </div>
    <button type="submit">Create Post</button>
  </form>
);

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, [blogs.length]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
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

  const handleAddBlog = async (event) => {
    event.preventDefault();
    try {
      const newBlog = await blogService.create({
        title: title,
        author: author,
        url: url,
        likes: likes,
      });
      setBlogs((oldBlogs) => [...oldBlogs, newBlog]);
      setTitle("");
      setAuthor("");
      setUrl("");
      setLikes(0);
      console.log("got");
    } catch {
      setErrorMessage("Blog Post Failed");
    }
  };

  const onLogOut = () => {
    window.localStorage.removeItem("loggedBlogappUser");
    setUser(null);
  };

  return (
    <div>
      {user === null ? (
        <LoginForm
          handleLogin={handleLogin}
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
        />
      ) : (
        <BlogForm onLogOut={onLogOut} blogs={blogs} user={user} />
      )}
      {user === null ? (
        ""
      ) : (
        <NewBlogForm
          handleAddBlog={handleAddBlog}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setUrl={setUrl}
          setLikes={setLikes}
          title={title}
          author={author}
          url={url}
          likes={likes}
        />
      )}
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
