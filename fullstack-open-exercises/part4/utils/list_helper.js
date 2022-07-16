const totalLikes = (blogs) => {
  const newArray = [];
  blogs.forEach((blog) => newArray.push(blog.likes));
  const theActualLikes = newArray.reduce((a, b) => a + b, 0);
  return theActualLikes;
};

module.exports = { totalLikes };
