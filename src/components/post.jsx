import React from 'react';

const Post = ({ authorEmail, text, subject, imageUrl }) => {
  return (
    <div className="post">
      <h3>{subject}</h3>
      <p>Author: {authorEmail}</p>
      <p>{text}</p>
      {imageUrl !== "null" && <img src={'https://rcnecovalbjxalrbqcxq.supabase.co/storage/v1/object/public/posts/' + imageUrl} alt="Post Image" />}
    </div>
  );
};

export default Post;