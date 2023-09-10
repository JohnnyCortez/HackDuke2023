import { useEffect, useState } from 'react';
import { supabase } from '../client';
import Post from '../components/post';
import { Link } from 'react-router-dom';

const Discussion = (username) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your Supabase table
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('authorEmail, text, subject, links, username, imageUrl, created_at');
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        // Construct the full image URLs
        const postsWithFullUrls = data.map((post) => ({
          ...post,
          imageUrl: `${post.imageUrl}`,
        }));

        setPosts(postsWithFullUrls);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Environmental Posts</h1>
      {username.username === null ? "" : <button className="create-post-button"><Link to="/createPost">Create Post!</Link></button>}
      <div class="post-container">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
      </div>
    </div>
  );
};

export default Discussion;