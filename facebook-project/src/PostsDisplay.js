import { Card } from "react-bootstrap";
import Comment from "./Comment";
import { useEffect, useState, useRef } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./PostsDisplay.css";
import Whatsapp from "./images/Whatsapp.png";
import Tweeter from "./images/Tweeter.webp";
import Instagram from "./images/Instagram.webp";

const PostsDisplay = ({ Posts, user }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [displayComments, setDisplayComments] = useState(false);
  const [posts, setPosts] = useState(Posts);
  const commentInputRef = useRef(null);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [editingPostId, setEditingPostId] = useState(null);
  const [editText, setEditText] = useState("");
  const [showShareMenu, setShowShareMenu] = useState({});

  const handleToggleShareMenu = (postId) => {
    setShowShareMenu((prevShowShareMenu) => ({
      ...prevShowShareMenu,
      [postId]: !prevShowShareMenu[postId],
    }));
  };

  const handleEditStart = (post) => {
    setEditingPostId(post.id);
    setEditText(post.text);
  };

  const handleToggleLike = (postId) => {
    setLikedPosts((currentLikes) => {
      const updatedLikes = new Set(currentLikes);
      if (updatedLikes.has(postId)) {
        updatedLikes.delete(postId);
      } else {
        updatedLikes.add(postId);
      }
      return updatedLikes;
    });
  };

  useEffect(() => {
    setPosts(Posts);
  }, [Posts]);

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

  const handleSaveEdit = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, text: editText };
        }
        return post;
      })
    );

    setEditingPostId(null);
    setEditText("");
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

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id} className="mb-3">
            <Card.Body>
              <Card.Title>{post.publisher}</Card.Title>
              {editingPostId === post.id && (
                <FormControl
                  as="textarea"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              )}
              {editingPostId === post.id && (
                <>
                  <Button onClick={() => handleSaveEdit(post.id)}>Save</Button>
                  <Button onClick={() => setEditingPostId(null)}>Cancel</Button>
                </>
              )}
              <Card.Text>{post.text}</Card.Text>
              {post.publisher === user.username && (
                <div>
                  {" "}
                  <Card.Img
                    onClick={() => handleDeletePost(post.id)}
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                    src="https://static.vecteezy.com/system/resources/previews/020/120/932/original/delete-button-delete-icon-simple-style-recycle-poster-background-symbol-delete-brand-logo-design-element-delete-t-shirt-printing-for-sticker-free-vector.jpg"
                  />
                  <Card.Img
                    onClick={() => handleEditStart(post)}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAVFBMVEX///+AgIB1dXV7e3t6enqVlZW9vb37+/uGhoa6urq+vr6bm5vPz8+Tk5N3d3f09PSxsbHJycng4OClpaXs7OyNjY3U1NTm5uavr6/w8PDZ2dmnp6dQV8U7AAAENElEQVR4nO3d4VbiMBAF4CkFFCoFRJB13/89t0i6SpNKaCbmzpy5f+nx5Ds3TAsWIJKU7UvpFeTNtpqpFm7rSrVwW12iV3jpT7Pw2p9eYd+fVuFXfzqF3/vTKLztT59w2J82od+fLuFToD9VwuMIUItwM+ZTIlyM+1QIf+hPhfCOT7zwrk+4MMInWhjlEyyM9IkVRvuECh/wiRQ+5BMofNAnTviwT5hwgk+UcJJPkHCiT4xwsk+IcPT1uxJhQn8ihE2b5MMXPj2nNWjC8jGhCU1YPiY0oQnLx4QmNGH5mBBeeL53QLJwtv4Nx1g2bXPvkERhYV9dzfMKi/uqvMKyPvf+YEZhWd//+1+yCQH2Z1YhjC+TEMiXRQjlyyAE87ELIc4PGYVw/TELQc5/2YSQ/TEKQftjEwL7WISw+5NJCO5LFgKe/1iFkM+/uma7LoXcn/WCmjmPELO/RfcYjxDXxyNE3Z/XpAuxfelCdF+qEN+XJkSeL185TD4fSuivy3pwYLRQRn+08m6kjBQK6W8184+KEgr2RQkrIfsz6IsS5ll5XEZeH8X7YoQFk9wfuJDFByxMnC/wQqb+YIUM8wVayLY/QYXMPjghuw9MyDhfIIUZ+oMSZvLBCLP5QISs5z9AYZb5AiTMuD+d0PtLv5rM/XWZrUq4+vyCT/L7L/A+7f1lPT8A+Gx/ugj1WX8uQn3a+9Pu074/o31L5T7rb8y3LOHqYz4X85mvQKLP7+aD9Nn+dBHqs/5czAfps/3pItSnvT/zuZjPfAViPhfzma9AzOci1GfXny7mM1+BmM9FqM/mp4tQn/XnYj7zFYj5XMxnvgIxn4v5IH3x34+i/PMrQvuL9ll/Yz7rL2O097cO/z5lvfEOlNnf8Iu/ep+W/oiegz41/RGFFq5mvnR5DzwFNfVHp7m3KE39dbPDmzGq+gsMUV39+UNUWX9EgxmjrT9/iA4PEO7zhmi9u31cuo92wxnT3gjF+wJXot+F8n0UWNyXUIHvKUTohQp8wSvRXqjBRy/+lWgvVOHzh2gvXO1V+Ggxtsw6XK00X2iIpgXMt526D4X46DX8jpoaH+2nPtOE+EaHqBYfbZT7iHOHIvo4hyiij3OIQvoYhyimj2+IgvqoYQKi+riuRGF9TEMU1sc0RHF9PEMU2McyRJF94y/nlfgYrkSxfelDFNuXPkTBfbRO3KLoPjqnDVF4Hx2V+4b/vFbn+5MCbPF99JEAFNBf0hCV0N/YbZRq+ksYojL6C99GeTf1vBXSH709OGM6Wltv/u5ft6VXHplTNPBCa49/9x9SaNf4t1GGafPjYf3xVnq1E/LzEK0vtufD+iSRdk3wXvSedmyWp7eiP3abHn+IftKqw+70Lpz2mdshepn+VbN7UUG7pr+N8kKrm91eEe2a5fxz+i/O+3dZ0z825661V22tfcs/FMZdOuZzN+kAAAAASUVORK5CYII="
                    style={{ maxWidth: "20px", maxHeight: "20px" }}
                  />
                </div>
              )}
              <Card.Img
                variant="top"
                src={post.imageUrl}
                style={{ maxWidth: "100%" }}
              />
              <div className="d-flex justify-content-between mt-3">
                <span
                  className="like-button"
                  role="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleToggleLike(post.id)}
                >
                  {likedPosts.has(post.id) ? "♥" : "♡"} Like
                </span>
                <span
                  onClick={() => setDisplayComments(!displayComments)}
                  role="button"
                  style={{ cursor: "pointer" }}
                >
                  💬 Comments
                </span>
                <span
                  onClick={() => handleToggleShareMenu(post.id)}
                  role="button"
                  style={{ cursor: "pointer" }}
                >
                  Share
                </span>
                {showShareMenu[post.id] && (
                  <div
                    className="share-menu"
                    style={{
                      position: "absolute",
                      right: 0,
                      backgroundColor: "#f8f9fa",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        src={Whatsapp}
                        alt="WhatsApp"
                        style={{ width: "24px", marginRight: "10px" }}
                      />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        src={Tweeter}
                        alt="Twitter"
                        style={{ width: "24px", marginRight: "10px" }}
                      />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        src={Instagram}
                        alt="Instagram"
                        style={{ width: "24px" }}
                      />
                    </a>
                  </div>
                )}
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
