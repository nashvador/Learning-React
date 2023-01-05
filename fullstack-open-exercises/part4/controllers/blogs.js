const blogsRouter = require("express").Router();
const { update } = require("lodash");
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

blogsRouter.get("/", async (request, response) => {
  const getBlogs = await Blog.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });
  response.json(getBlogs);
});

blogsRouter.get("/:id", async (request, response, next) => {
  const getBlogsById = await Blog.findById(request.params.id);
  if (getBlogsById) {
    response.json(getBlogsById);
  } else {
    response.status(404).end();
  }
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const user = request.user;
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  });

  const postBlog = await blog.save();
  user.blogs = user.blogs.concat(postBlog._id);
  await user.save();

  response.json(postBlog);
});

blogsRouter.delete("/:id", async (request, response, next) => {
  const blog = await Blog.findById(request.params.id);
  const foundUser = request.user;
  if (blog.user.toString() === foundUser._id.toString()) {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } else {
    return response.status(401).json({ error: "incorrect user" });
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };

  const updateBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  });
  response.json(updateBlog);
});

module.exports = blogsRouter;
