const router = require("express").Router();
const { Blog } = require("../model");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../util/db");

router.get("/", async (req, res) => {
  const blogs = await sequelize.query(
    `SELECT COUNT(author) as blogCount, author, SUM(likes) as totallikes FROM blogs GROUP BY author;`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(blogs);
});

module.exports = router;
