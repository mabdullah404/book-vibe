"use client";

import { useContext } from "react";
import { BookContext } from "@/context/BooksContext";
import BookCard from "@/components/shared/BookCard";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Listed Books</h1>

      <div className="flex justify-center">
        <div className="tabs tabs-box items-center gap-4 p-4">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Read Books"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {readBooks.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Wishlist"
            defaultChecked
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {wishlist.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
