"use client";

import { BookContext } from "@/context/BooksContext";
import { useContext } from "react";
import { toast } from "react-toastify";

/** @param {{ book: import("@/types/books.types").IBook }} props */


const ReadButton = ({ book }) => {

    const {readBooks,setReadBooks}  = useContext(BookContext)
  

 
  const handleReadBook = () => {

    setReadBooks([...readBooks, book])
     toast.success(`${book.bookName} borrowed successfully!`);

    console.log("ReadBook  Button Triggered " , book);
  };

  return (
    <button className="btn btn-primary w-50" onClick={() => handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;
