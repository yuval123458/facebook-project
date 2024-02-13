import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Image,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";

function Comment({ comment, onDelete, onEdit, currentUser = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const submitHandler = (editText) => {
    onEdit(editText, comment.id);
    setIsEditing(false);
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={2} md={1}>
            <Image
              src={comment.imageUrl}
              roundedCircle
              width="50"
              height="50"
            />
          </Col>
          <Col>
            {isEditing ? (
              <Card.Text>
                <strong>{comment.author}</strong>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="write edited comment..."
                    aria-describedby="basic-addon2"
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <Button
                    onClick={() => submitHandler(editText)}
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    Submit
                  </Button>
                </InputGroup>
              </Card.Text>
            ) : (
              <Card.Text>
                <strong>{comment.author}</strong> {comment.text}
              </Card.Text>
            )}
          </Col>
          {comment.currentUser && !isEditing && (
            <Col xs={3} md={2} className="text-end">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>{" "}
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => onDelete(comment.id)}
              >
                Delete
              </Button>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Comment;
