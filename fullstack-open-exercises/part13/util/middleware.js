const { Blog } = require("../model");

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id);
  next();
};

module.exports = { blogFinder };
