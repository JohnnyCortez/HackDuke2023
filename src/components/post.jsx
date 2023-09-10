import React from 'react';

const Post = ({ authorEmail, username, text, subject, links, imageUrl }) => {
  return (
    <div className="post">
      <h3>{subject}</h3>
      <p>Author: {username || authorEmail}</p>
      <p>{text}</p>
      <a href={links} target="_blank">{links}</a>
      {imageUrl !== "null" && <img src={'https://rcnecovalbjxalrbqcxq.supabase.co/storage/v1/object/public/posts/' + imageUrl} alt="Post Image" />}
    </div>
  );
};

export default Post;