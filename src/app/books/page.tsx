

import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.types";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");

  const data = await response.json();

  return data;
};

const Books = async () => {
  const getData = await getBooks();

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      
      {/* Page Title */}
      <div className="mx-auto mb-10 ">
        <h1 className="text-3xl font-bold text-gray-900 flex justify-center ">
          Explore All Books
        </h1>

        <p className="mt-2 text-gray-500 flex justify-center" >
          Discover your next favorite book
        </p>
      </div>

      {/* Book Grid */}
      <div className="container mx-auto grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {getData.map((book :IBook ) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}

      </div>
    </div>
  );
};

export default Books;