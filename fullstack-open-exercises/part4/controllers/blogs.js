const blogsRouter = require("express").Router();
const { update } = require("lodash");
const Blog = require("../models/blog");

blogsRouter.get("/", async (request, response) => {
  const getBlogs = await Blog.find({});
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

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  const postBlog = await blog.save();
  response.json(postBlog);
});

blogsRouter.delete("/:id", async (request, response, next) => {
  await Blog.findByIdAndRemove(request.params.id);
  response.status(204).end();
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
