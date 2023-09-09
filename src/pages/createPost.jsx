import { useEffect, useState } from 'react';
import { supabase } from '../client';

function CreatePost() {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [user, setUser] = useState(null);

  async function verify() {
    const { data } = await supabase.auth.getSession();
    return data;
  }

  async function logData() {
    try {
      const data = await verify();
      setUser(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  useEffect(() => {
    logData();
  }, []);

  console.log(user)

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePostCreate = async () => {
    if (!text) {
      alert('Please enter some text for your post.');
      return;
    }

    if (selectedFile) {
      // Generate a unique filename for the uploaded image
      const fileName = `${Date.now()}_${selectedFile.name}`;

      // Upload the image to Supabase Storage in the "posts" bucket
      const { data, error } = await supabase.storage
        .from('posts')
        .upload(fileName, selectedFile);

      if (error) {
        console.error('Error uploading image:', error.message);
        return;
      }

      // The URL of the uploaded image
      const imageUrl = data.Key;

      // Create a new post with text, authorEmail, and the image URL
      const { data: newPost, error: postError } = await supabase
        .from('posts')
        .insert([
          {
            authorEmail: user?.session.user.email,
            text: text,
            image_url: imageUrl, // Store the image URL
          },
        ])
        .single();

      if (postError) {
        console.error('Error creating post:', postError.message);
      } else {
        console.log('Post created successfully:', newPost);
        // Clear the form after successful post creation
        setText('');
        setSelectedFile(null);
      }
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <textarea
        placeholder="Write your post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handlePostCreate}>Create Post</button>
    </div>
  );
}

export default CreatePost;