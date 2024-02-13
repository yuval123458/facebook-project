import { Card } from "react-bootstrap";
import Comment from "./Comment";
import { useEffect, useState, useRef } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const PostsDisplay = ({ Posts, user }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [displayComments, setDisplayComments] = useState(false);
  const [posts, setPosts] = useState(Posts);

  const commentInputRef = useRef(null);

  const handleAddComment = (postId) => {
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      text: newCommentText,
      author: user.username,
      imageUrl: URL.createObjectURL(user.File),
      currentUser: true,
    };
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewCommentText("");
    if (commentInputRef.current) commentInputRef.current.value = "";
  };

  const editHandler = (editedText, commentId) => {
    const updatedPosts = posts.map((post) => {
      const commentsUpdated = post.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, text: editedText };
        }
        return comment;
      });
      return { ...post, comments: commentsUpdated };
    });
    setPosts(updatedPosts);
  };

  const deleteHandler = (commentId) => {
    const updatedPosts = posts.map((post) => {
      const updatedComments = post.comments.filter(
        (comment) => comment.id !== commentId
      );
      return { ...post, comments: updatedComments };
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
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
                <span
                  onClick={() => setDisplayComments(!displayComments)}
                  role="button"
                  style={{ cursor: "pointer" }}
                >
                  💬 Comments
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
            {displayComments &&
              post.comments.map((comment) => {
                return (
                  <Comment
                    comment={comment}
                    onEdit={editHandler}
                    onDelete={deleteHandler}
                  />
                );
              })}
            {displayComments && (
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="add a comment..."
                  aria-describedby="basic-addon2"
                  onChange={(e) => setNewCommentText(e.target.value)}
                  value={newCommentText}
                  ref={commentInputRef}
                />
                <Button
                  onClick={() => handleAddComment(post.id)}
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  Add
                </Button>
              </InputGroup>
            )}
          </Card>
        ))
      ) : (
        <div className="text-center mt-4">
          <p>No posts found.</p>
        </div>
      )}
    </div>
  );
};
export default PostsDisplay;
