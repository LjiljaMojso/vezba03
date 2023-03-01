import React, { useState, useContext } from "react";
import BooksContext from "../context/books";
const BookEdit = ({ onSubmit, bookTitle, bookId }) => {
  const { editBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(bookTitle);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(bookId, title);
  };
  return (
    <form className="book_edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
