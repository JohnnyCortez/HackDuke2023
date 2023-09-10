import React from 'react';

const Post = ({ authorEmail, username, text, subject, links, imageUrl, created_at }) => {
  return (
    <div className="post">
      <h3 className="post-title">Subject: {subject}</h3>
      <p className="post-text"><span class = "bold">Author: </span>{username || authorEmail}</p>
      {imageUrl !== "null" && (
        <img
          src={'https://rcnecovalbjxalrbqcxq.supabase.co/storage/v1/object/public/posts/' + imageUrl}
          alt="Post Image"
          className="post-image"
        />
      )}
      <p className="post-textPrimary wrapForm">{text}</p>
      <span class = "bold">Links: </span><a href={links} className="post-link" target="_blank" rel="noopener noreferrer">
        {links}
      </a>
      <p className="post-text"><span class = "bold">Posted: </span>{created_at.slice(0, 10)}</p>
    </div>
  );
};

export default Post;