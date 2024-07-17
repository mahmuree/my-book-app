import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book, deleteBook }) => {
  return (
    <li>
      <span>{book.title} by {book.author}</span>
      <Link to={`/edit/${book.id}`}><button>Edit</button></Link>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  );
};

export default BookItem;
