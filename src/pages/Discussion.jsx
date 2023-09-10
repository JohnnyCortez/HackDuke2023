import { useEffect, useState } from 'react';
import { supabase } from '../client';
import Post from '../components/post';
import { Link } from 'react-router-dom';

const Discussion = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null); // State to store the selected subject

  useEffect(() => {
    // Fetch posts from your Supabase table
    async function fetchPosts() {
      let { data, error } = await supabase
        .from('posts')
        .select('authorEmail, text, subject, links, username, imageUrl, created_at');
      
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        // If a subject is selected, filter the posts by subject
        if (selectedSubject) {
          data = data.filter((post) => post.subject === selectedSubject);
        }

        // Construct the full image URLs
        const postsWithFullUrls = data.map((post) => ({
          ...post,
          imageUrl: `${post.imageUrl}`,
        }));

        setPosts(postsWithFullUrls);
      }
    }

    fetchPosts();
  }, [selectedSubject]); // Include selectedSubject in the dependency array

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value); // Update the selected subject
  };

  return (
    <div>
    <div className='information-reduce'>
      <h2>Environmental Posts 🌍</h2>
    </div>
      <div className='formButtons'>
      {username === null ? '' : (
        <>
          <button className="create-post-button">
            <Link to="/createPost">Create Post!</Link>
          </button>
        </>
      )}
        <label className="Discussionfilter">
            Filter by Subject:
            <select  className="filter-button" onChange={handleSubjectChange}>
              <option value="">All</option>
              <option value="Climate Change">Climate Change</option>
              <option value="Biodiversity Loss">Biodiversity Loss</option>
              <option value="Deforestation">Deforestation</option>
              <option value="Air Pollution">Air Pollution</option>
              <option value="Ocean Pollution">Ocean Pollution</option>
              <option value="Plastic Pollution">Plastic Pollution</option>
            </select>
          </label>
      </div>
      <div className="post-container">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Discussion;