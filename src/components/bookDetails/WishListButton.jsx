"use client"

import { BookContext } from "@/context/BooksContext";
import { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}) => {

    const {wishlist,setWishlist} = useContext(BookContext)

    const handleWishList = ()=>{
        setWishlist([...wishlist, book]);
        toast.success(`${book.bookName} added to wishlist`);
    };


    return (
        <button className="btn btn-info text-white" onClick={()=> handleWishList()}>
            Wishlist
          </button>
    );
};

export default WishListButton;