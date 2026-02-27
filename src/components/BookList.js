// STEP 3: consume the context value in any component
import { useContext } from 'react';
// 1. import the context
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  // 2. use the useContext hook to get the value from the context
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return (
    <div className="book-list">
      {/* 3. use the value from the context */}
      Context Value: {value}
      {renderedBooks}
    </div>
  );
}

export default BookList;
