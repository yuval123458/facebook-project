import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { posts as Posts } from "./db";
import { users } from "./db";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState(Posts);
  const [text, setText] = useState("");

  const submitHandler = (e) => {};

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={3} className="sticky-top vh-100 overflow-auto">
          <h4 className="mt-2">Menu</h4>
        </Col>
        <Col style={{ overflowY: "auto" }} xs={12} md={6}>
          <div className="mb-3 p-3 bg-light border rounded">
            <Form>
              <Form.Group className="mb-3" controlId="postInput">
                <Form.Label>Add a new post</Form.Label>
                <Form.Control
                  onChange={(e) => e.target.value}
                  placeholder="What's on your mind ?..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button onClick={submitHandler} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          {/* Posts Feed - Making posts smaller as requested */}
          {posts.map((post) => (
            <Card key={post.id} className="mb-3">
              <Card.Body>
                <Card.Title>{post.publisher}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <Card.Img
                  variant="top"
                  src={post.imageUrl}
                  style={{ maxWidth: "100%" }}
                />
                <div className="d-flex justify-content-between mt-3">
                  <span role="button" style={{ cursor: "pointer" }}>
                    👍 Like
                  </span>
                  <span role="button" style={{ cursor: "pointer" }}>
                    💬 Comment
                  </span>
                  <span role="button" style={{ cursor: "pointer" }}>
                    Share
                  </span>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Published on {post.publishDate}
                </small>
              </Card.Footer>
            </Card>
          ))}
        </Col>
        <Col
          style={{}}
          xs={12}
          md={3}
          lg={3}
          className="sticky-top vh-100 overflow-auto"
        >
          <h5 className="mt-2">Contacts</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
