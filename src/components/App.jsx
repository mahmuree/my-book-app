// src/components/App.jsx
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import BookList from './BookList';
import Login from './Login';
import Register from './Register';
import BookForm from './BookForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([{ username: 'admin', password: 'password123' }]);
  const [currentUser, setCurrentUser] = useState(null);

  const addBook = (book) => setBooks([...books, book]);
  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };
  const deleteBook = (id) => setBooks(books.filter(book => book.id !== id));

  const registerUser = (username, password) => {
    setUsers([...users, { username, password }]);
  };

  const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={currentUser ? <Navigate to="/books" /> : <Login loginUser={loginUser} />} />
        <Route path="/register" element={currentUser ? <Navigate to="/login" /> : <Register registerUser={registerUser} />} />
        <Route path="/books" element={!currentUser ? <Navigate to="/login" /> : <BookList books={books} deleteBook={deleteBook} />} />
        <Route path="/add" element={!currentUser ? <Navigate to="/login" /> : <BookForm onSubmit={addBook} />} />
        <Route path="/edit/:id" element={!currentUser ? <Navigate to="/login" /> : <BookForm onSubmit={updateBook} books={books} />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      {currentUser && <button onClick={logoutUser}>Logout</button>}
    </div>
  );
};

export default App;
