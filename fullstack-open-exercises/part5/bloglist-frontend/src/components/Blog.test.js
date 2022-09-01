import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

test("renders content", () => {
  const blog = {
    title: "Render blog title",
    author: "Render blog author",
    user: { username: "ig", name: "random", id: "hi" },
  };

  const { container } = render(<Blog blog={blog} />);

  const titleDiv = container.querySelector(".title");
  const authorDiv = container.querySelector(".author");

  expect(titleDiv).toHaveTextContent("Render blog title");
  expect(authorDiv).toHaveTextContent("Render blog author");
});
