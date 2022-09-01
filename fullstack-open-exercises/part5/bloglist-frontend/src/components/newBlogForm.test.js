import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewBlogForm from "./NewBlogForm";
import userEvent from "@testing-library/user-event";

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  const handleAddBlog = jest.fn();
  const setTitle = jest.fn();

  const user = userEvent.setup();

  render(<NewBlogForm handleAddBlog={handleAddBlog} setTitle={setTitle} />);

  const input = screen.getByPlaceholderText("write blog title here");
  const sendButton = screen.getByText("Create Post");

  await user.type(input, "testing a form...");
  await user.click(sendButton);

  expect(handleAddBlog.mock.calls).toHaveLength(1);
});
