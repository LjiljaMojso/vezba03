import React, { useState, useContext } from "react";
import BooksContext from "../context/books";
const BookCreate = () => {
  const { createBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter Title"
          onChange={handleInput}
          value={title}
        />
        <button className="button">Create Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
