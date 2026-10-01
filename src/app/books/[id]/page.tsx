import Image from "next/image";
import { notFound } from "next/navigation";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import type { IBook } from "@/types/books.types";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");

  const data: IBook[] = await response.json();

  return data;
};

interface IBookDetailspage {
    params : Promise <{
        id : string ;
    }>;
}

const BookDetailsPage = async ({params,}: IBookDetailspage) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book) => String(book.bookId) === id
  );

  // Book না পাওয়া গেলে 404 page
  if (!book) {
    notFound();
  }

  return (
  <div className="container mx-auto px-4 py-10">
    <div className="card lg:card-side bg-base-100 border-2 border-sky-500 shadow-sm overflow-hidden">

      {/* Book Image */}
      <figure className="lg:w-1/2 bg-base-200 p-8">
        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={500}
          className="w-full max-w-sm mx-auto object-contain"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-1/2">

        {/* Title */}
        <h2 className="text-3xl font-bold">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-base-content/70">
          By :{" "}
          <span className="font-medium text-base-content">
            {book.author}
          </span>
        </p>

        <div className="divider my-1"></div>

        {/* Category */}
        <p className="text-sm">
          {book.category}
        </p>

        <div className="divider my-1"></div>

        {/* Review */}
        <p className="text-sm leading-6 text-base-content/70">
          <span className="font-bold text-base-content">
            Review :
          </span>{" "}
          {book.review}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 mt-3">
          <span className="font-bold text-sm">
            Tag
          </span>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-success badge-outline"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="divider my-1"></div>

        {/* Book Information */}
        <div className="space-y-3 text-sm">

          <div className="flex">
            <span className="w-40 text-base-content/60">
              Number of Pages:
            </span>

            <span className="font-semibold">
              {book.totalPages}
            </span>
          </div>

          <div className="flex">
            <span className="w-40 text-base-content/60">
              Publisher:
            </span>

            <span className="font-semibold">
              {book.publisher}
            </span>
          </div>

          <div className="flex">
            <span className="w-40 text-base-content/60">
              Year of Publishing:
            </span>

            <span className="font-semibold">
              {book.yearOfPublishing}
            </span>
          </div>

          <div className="flex">
            <span className="w-40 text-base-content/60">
              Rating:
            </span>

            <span className="font-semibold">
              {book.rating}
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="card-actions mt-5">
          <ReadButton book={book} />

          <WishListButton book={book}></WishListButton>

          
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailsPage;