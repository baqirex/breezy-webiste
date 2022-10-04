import React from "react";

const Post = ({ post, title, description }) => {
  return (
    <div className="post">
      <img src={post} height="80px" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Post;
