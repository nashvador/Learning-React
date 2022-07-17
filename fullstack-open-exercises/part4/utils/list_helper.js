var _ = require("lodash");

const totalLikes = (blogs) => {
  const newArray = [];
  blogs.forEach((blog) => newArray.push(blog.likes));
  const theActualLikes = newArray.reduce((a, b) => a + b, 0);
  return theActualLikes;
};

const favoriteLikes = (blogs) => {
  const filteredBlogs = blogs.map((value) => {
    return value.likes;
  });
  const max = Math.max.apply(null, filteredBlogs);
  return blogs[filteredBlogs.indexOf(max)];
};

const mostBlogs = (blogs) => {
  const seperationBlogs = _.groupBy(blogs, "author");
  const authorLength = Object.values(seperationBlogs).map((arr) => arr.length);
  console.log(authorLength);
  const max = Math.max.apply(null, authorLength);
  const authorName =
    Object.values(seperationBlogs)[authorLength.indexOf(max)][0].author;
  return { author: authorName, NumberofBlogs: max };
};

module.exports = { totalLikes, favoriteLikes, mostBlogs };
