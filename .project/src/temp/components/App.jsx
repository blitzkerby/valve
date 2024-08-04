import React from 'react';
import { Input } from './Input';
import { EditForm } from './EditForm';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
      { id: 10, title: 'Harry Potter' }, // Don't change
      { id: 17, title: 'Hunger Games' },
      { id: 54, title: 'Dark Tower' }
  ]);
  
  const updateBookById = (id, title) => {
    // TODO: Find a book in the 'books' array with the given id
    // Update that books 'title' property
    // Don't forget to update the 'books' state by calling 'setBooks'
    const updatedBooks = [...books]
    const bookIndex = 
  };
  
  const addBook = (title) => {
    const book = { title: title, id: ~~(Math.random() * 1000) };
    setBooks([...books, book])
  };
  
  const renderedBooks = books.map((book, i) => {
      return <li key={book.id}>Title: {book.title}, Id: {book.id}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addBook} />
      <ol>
        {renderedBooks}
      </ol>
      <hr />
      <EditForm books={books} onSubmit={updateBookById}  />
    </div>
  );
}

export default App;
