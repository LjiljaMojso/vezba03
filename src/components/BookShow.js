import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";
const BookShow = ({ book }) => {
  const { deleteBookById } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit
        bookTitle={book.title}
        bookId={book.id}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default BookShow;
