const express = require("express");
const app = express();
const middleware = require("./util/middleware");

const { PORT } = require("./util/config");
const { connectToDatabase } = require("./util/db");

const blogsRouter = require("./controllers/blogs");
const usersRouter = require("./controllers/users");

app.use(express.json());
app.use(middleware.blogFinder);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
