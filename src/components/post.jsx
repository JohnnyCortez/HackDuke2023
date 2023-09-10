import React from 'react';

const Post = ({ authorEmail, username, text, subject, links, imageUrl }) => {
  return (
    <div className="post">
      <h3 className="post-title">Subject: {subject}</h3>
      <p className="post-author">Author: {username || authorEmail}</p>
      <p className="post-text">{text}</p>
      Relevant Links: <a href={links} className="post-link" target="_blank" rel="noopener noreferrer">
        {links}
      </a>
      {imageUrl !== "null" && (
        <img
          src={'https://rcnecovalbjxalrbqcxq.supabase.co/storage/v1/object/public/posts/' + imageUrl}
          alt="Post Image"
          className="post-image"
        />
      )}
    </div>
  );
};

export default Post;