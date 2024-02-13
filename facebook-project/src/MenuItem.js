import React from "react";

// MenuItem component definition
const MenuItem = ({ text, imageUrl }) => {
  return (
    <div
      className="d-flex align-items-center py-2 px-3 mb-2 bg-light border rounded hover-shadow"
      style={{ cursor: "pointer", transition: "background-color 0.2s" }}
    >
      <img
        src={imageUrl}
        alt={text}
        className="rounded-circle me-2"
        style={{ width: "40px", height: "40px", objectFit: "cover" }}
      />
      <span
        style={{ paddingTop: "30px", paddingLeft: "20px" }}
        className="font-weight-bold"
      >
        {text}
      </span>
    </div>
  );
};

export default MenuItem;
