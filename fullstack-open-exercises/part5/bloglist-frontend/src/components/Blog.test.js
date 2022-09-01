import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

test("at start the children are not displayed", () => {
  const blog = {
    title: "Render blog title",
    author: "Render blog author",
    user: { username: "ig", name: "random", id: "hi" },
  };

  const { container } = render(<Blog blog={blog} />);

  const div = container.querySelector(".togglableContent");
  expect(div).toHaveStyle("display: none");
});

test("after clicking the button, children are displayed", async () => {
  const blog = {
    title: "Render blog title",
    author: "Render blog author",
    user: { username: "ig", name: "random", id: "hi" },
  };

  const { container } = render(<Blog blog={blog} />);

  const user = userEvent.setup();
  const button = screen.getByText("show");
  await user.click(button);

  const div = container.querySelector(".togglableContent");
  expect(div).not.toHaveStyle("display: none");
});
