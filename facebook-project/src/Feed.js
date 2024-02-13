import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { posts as Posts } from "./db";
import { users } from "./db";
import "./Feed.css";
import MenuItem from "./MenuItem";
import Search from "./Search";
import PostsDisplay from "./PostsDisplay";

function Feed({ user }) {
  const [posts, setPosts] = useState(Posts);
  const [displayedPosts, setDisplayedPosts] = useState(posts); // Posts to be displayed, initially all
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredPosts =
      searchText.length > 0
        ? posts.filter((post) =>
            post.publisher.toLowerCase().includes(searchText.toLowerCase())
          )
        : posts;
    setDisplayedPosts(filteredPosts);
  }, [searchText, posts]);

  const postSubmitHandler = (e) => {
    e.preventDefault();

    setPosts([
      {
        id: posts[posts.length - 1].id + 1,
        publisher: user.username,
        text,
        imageUrl: URL.createObjectURL(user.File),
        publishDate: new Date().toLocaleDateString(),
        comments: [],
      },
      ...posts,
    ]);
    setText("");
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
          <MenuItem
            text="Settings"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/ea/Settings_%28iOS%29.png"
          />
          <MenuItem
            text="My Posts"
            imageUrl="https://cdn3.vectorstock.com/i/1000x1000/87/37/home-icon-logo-design-simple-house-vector-36658737.jpg"
          />
        </Col>
        <Col style={{ overflowY: "auto" }} xs={12} md={6}>
          <div className="mb-3 p-3 bg-light border rounded">
            <Form onSubmit={postSubmitHandler}>
              <Form.Group className="mb-3" controlId="postInput">
                <Form.Label>Add a new post</Form.Label>
                <Form.Control
                  onChange={(e) => setText(e.target.value)}
                  placeholder={`What's on your mind, ${
                    user ? user.username : ""
                  } ?...`}
                  as="textarea"
                  rows={3}
                />
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Add an image to add some spice!</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <PostsDisplay user={user} Posts={displayedPosts} />
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
