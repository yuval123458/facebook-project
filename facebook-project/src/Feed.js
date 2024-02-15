import React, { useState, useEffect, useRef } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { posts as Posts } from "./db";
import { users } from "./db";
import "./Feed.css";
import MenuItem from "./MenuItem";
import Search from "./Search";
import PostsDisplay from "./PostsDisplay";
import Settings from "./images/Settings.png";
import Home from "./images/Home.jpeg";

function Feed({ user }) {
  const [posts, setPosts] = useState(Posts);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const file = useRef(null);

  const [theme, setTheme] = useState("light");

  const postSubmitHandler = (e) => {
    e.preventDefault();

    setPosts([
      {
        id: Math.floor(Math.random() * 1000000),
        publisher: user.username,
        text,
        imageUrl: URL.createObjectURL(user.File),
        publishDate: new Date().toLocaleDateString(),
        comments: [],
      },
      ...posts,
    ]);
    setText("");
    if (file.current) {
      file.current.value = "";
    }
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    console.log(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={3} className="sticky-top vh-100 overflow-auto">
          <h4 className="mt-2">Menu</h4>
          <Search searchHandler={searchHandler} />
          <MenuItem
            text="My Profile"
            imageUrl={URL.createObjectURL(user.File)}
          />
          <MenuItem text="Settings" imageUrl={Settings} />
          <MenuItem text="My Posts" imageUrl={Home} />
          <Button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Col>
        <Col style={{ overflowY: "auto" }} xs={12} md={6}>
          <div className="mb-3 p-3 bg-light border rounded">
            <Form onSubmit={postSubmitHandler}>
              <Form.Group className="mb-3" controlId="postInput">
                <Form.Label>Add a new post</Form.Label>
                <Form.Control
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  placeholder={`What's on your mind, ${
                    user ? user.username : ""
                  } ?...`}
                  as="textarea"
                  rows={3}
                />
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Add an image to add some spice!</Form.Label>
                  <Form.Control ref={file} type="file" />
                </Form.Group>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <PostsDisplay user={user} Posts={posts} />
        </Col>
        <Col
          style={{}}
          xs={12}
          md={3}
          lg={3}
          className="sticky-top vh-100 overflow-auto"
        >
          <h5 className="mt-2">Contacts</h5>
          {users.map((user) => {
            return <MenuItem text={user.username} imageUrl={user.imageUrl} />;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
