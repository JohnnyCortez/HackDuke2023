import { useEffect, useState } from 'react';
import { supabase } from '../client';
import Post from '../components/post';

const Discussion = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your Supabase table
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('authorEmail, text, subject, links, username, imageUrl');
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
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Discussion;