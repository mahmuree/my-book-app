import React from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <Link to="/add"><button>Add New Book</button></Link>
      <ul>
        {books.map(book => (
          <BookItem key={book.id} book={book} deleteBook={deleteBook} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
