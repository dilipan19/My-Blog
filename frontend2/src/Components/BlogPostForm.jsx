import React, { useState } from 'react';
import axios from 'axios';

const BlogPostForm = ({ fetchPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('auth-token');
      await axios.post('/api/posts', { title, content }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content" 
        required 
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default BlogPostForm;
