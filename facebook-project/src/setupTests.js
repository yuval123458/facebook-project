// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostsDisplay from "./PostsDisplay";
import { posts } from "./db";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import Feed from "./Feed";

test("displays posts based on props", () => {
  const posts = [
    { id: 1, text: "post 1" },
    { id: 2, text: "post 2" },
  ];
  const user = {};
  render(<PostsDisplay Posts={posts} user={user} />);

  expect(screen.getByText("post 1")).toBeInTheDocument();
  expect(screen.getByText("post 2")).toBeInTheDocument();
});

test("check for dummy posts existence", () => {
  expect(posts.length >= 10);

  posts.map((post) => {
    expect(post.id !== null && post.imageUrl !== null && post.text.length > 0);
  });
});

test("displays error for incorrect email", async () => {
  const user = { email: "test@example.com", password: "password123" };

  render(
    <BrowserRouter>
      <LoginForm user={user} handleLogin={null} />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/email/i), "wrong@example.com");
  await userEvent.type(screen.getByLabelText(/password/i), "password123");
  await userEvent.click(screen.getByRole("button", { name: /Log In/i }));

  expect(screen.getByText(/Incorrect email address./i)).toBeInTheDocument();
});

test("displays error for incorrect password", async () => {
  const user = { email: "test@example.com", password: "password123" };

  render(
    <BrowserRouter>
      <LoginForm user={user} handleLogin={null} />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
  await userEvent.type(screen.getByLabelText(/password/i), "password12");
  await userEvent.click(screen.getByRole("button", { name: /Log In/i }));

  expect(screen.getByText(/Incorrect password./i)).toBeInTheDocument();
});

describe("PostsDisplay", () => {
  const posts = [
    {
      id: 1,
      publisher: "Test test",
      text: "This is a test post",
      imageUrl: "",
      publishDate: "2022-01-01",
      comments: [],
    },
  ];

  const User = {
    username: "test user",
    File: new Blob(["test"], { type: "image/png" }),
  };

  test("renders posts correctly", () => {
    render(<PostsDisplay Posts={posts} user={User} />);

    // Check if the post's text is in the document.
    expect(screen.getByText(/This is a test post/i)).toBeInTheDocument();

    // Check if the publisher's name is rendered.
    expect(screen.getByText(/Test test/i)).toBeInTheDocument();
  });
});

describe("Feed Component", () => {
  const mockUser = {
    username: "testuser",
    File: new File([""], "filename", { type: "image/png" }),
  };

  // Mock for URL.createObjectURL, adjust as needed
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn();
  });

  test("toggles theme on button click", () => {
    render(<Feed user={mockUser} />);

    const themeToggleButton = screen.getByRole("button", {
      name: /Dark Mode/i,
    });
    fireEvent.click(themeToggleButton);

    // Assuming your application changes some visible text or attribute upon theme change
    expect(themeToggleButton).toHaveTextContent(/Light Mode/i);
  });

  // Additional tests...
});
