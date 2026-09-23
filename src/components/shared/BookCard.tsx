import { IBook } from '@/types/books.types';
import Image from 'next/image';


interface IBookCardProps{
    book : IBook ;
}

const BookCard = ({book}: IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            
            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
              <Image
                src={book.image}
                alt={book.bookName}
                width={800} 
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
                {book.category}
              </span>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
                <span className="text-yellow-400">★</span>
                {book.rating}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              
              {/* Book Name */}
              <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
                {book.bookName}
              </h2>

              {/* Author */}
              <p className="mt-1 text-sm text-gray-500">
                by <span className="font-medium text-gray-700">{book.author}</span>
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Book Info */}
              <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
                
                <div>
                  <p className="text-xs text-gray-400">
                    Pages
                  </p>
                  <p className="font-semibold text-gray-800">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Published
                  </p>
                  <p className="font-semibold text-gray-800">
                    {book.yearOfPublishing}
                  </p>
                </div>

              </div>

              {/* Publisher */}
              <p className="mb-4 text-xs text-gray-400">
                Published by{" "}
                <span className="font-medium text-gray-600">
                  {book.publisher}
                </span>
              </p>

              {/* Button */}
              <button className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 active:scale-95">
                View Details
              </button>

            </div>
          </div>
    );
};

export default BookCard;