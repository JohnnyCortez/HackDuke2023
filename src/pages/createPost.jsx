import { useState } from 'react';
import { supabase } from '../client'; // Import the Supabase client

function CreatePost() {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

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

      // Upload the image to Supabase Storage
      const { data, error } = await supabase.storage
        .from('your-storage-bucket-name')
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
            authorEmail: supabase.auth.user().email,
            text: text,
            images: [imageUrl], // Store the image URL(s)
            likes: 0, // Initialize likes count
          },
        ]);

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