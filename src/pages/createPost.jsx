import React, { useEffect, useState } from 'react';
import { supabase } from '../client';

function CreatePost(username) {
    // console.log(username.username, "hello")

  const [text, setText] = useState('');
  const [subject, setSubject] = useState('');
  const [links, setLinks] = useState('')
  const [imageFile, setImageFile] = useState(null);
  const [user, setUser] = useState(null);


  useEffect(() => {
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
    logData();
  }, []);

  const subjectOptions = [
    'Climate Change',
    'Biodiversity Loss',
    'Deforestation',
    'Air Pollution',
    'Ocean Pollution',
    'Plastic Pollution',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if both text and an image are provided
    if (!text || !imageFile) {
      alert('Please enter text and select an image');
      return;
    }

    // Upload the image to Supabase storage
    const { data, error } = await supabase.storage
      .from('posts')
      .upload(imageFile.name, imageFile);

    if (error) {
      console.error('Error uploading image:', error.message);
      return;
    }

    // Insert the post into the "posts" table
    const { data: postData, postError } = await supabase.from('posts').insert([
      {
        authorEmail: user?.session.user.email,
        username: username.username,
        text: text,
        subject: subject,
        imageUrl: imageFile.name,
        links: links,
      },
    ]);

    if (postError) {
      console.error('Error inserting post:', postError.message);
      return;
    }

    // Clear form inputs
    setText('');
    setSubject('');
    setLinks('');
    setImageFile(null);

    // Optionally, you can notify the user that the post was successfully created
    alert('Post created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Subject:</label>
      <input
        type="text"
        name="subject"
        list="subjectOptions"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <datalist id="subjectOptions">
        {subjectOptions.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
      <label>Text:</label>
      <textarea
        name="text"
        value={text}
        rows="4" cols="50"
        onChange={(e) => setText(e.target.value)}
      />
      <label>Relavent Links:</label>
      <input
        type="text"
        name="links"
        value={links}
        onChange={(e) => setLinks(e.target.value)}
      />
      <label>Image:</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <br/>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePost;