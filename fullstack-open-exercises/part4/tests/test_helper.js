const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "HTML is easy",
    author: "me",
    url: "fake.com",
    likes: 5,
  },
  {
    title: "Browser can execute only Javascript",
    author: "you",
    url: "real.com",
    likes: 7,
  },
];

const nonExistingId = async () => {
  const note = new Note({ content: "willremovethissoon", date: new Date() });
  await note.save();
  await note.remove();

  return note._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((info) => info.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
