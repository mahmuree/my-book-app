import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookForm = ({ onSubmit, books = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (id) {
      const book = books.find(b => b.id === parseInt(id));
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
      }
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onSubmit({ id: id ? parseInt(id) : Date.now(), title, author });
      navigate('/books');
    }
  };

  return (
    <div className="book-form">
      <h2>{id ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">{id ? 'Update Book' : 'Add Book'}</button>
      </form>
    </div>
  );
};

export default BookForm;
