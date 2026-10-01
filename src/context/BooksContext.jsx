"use client";

import { createContext, useState } from "react";

export const BookContext = createContext({ });


const BookProvider = ({children}) => {

    const [readBooks , setReadBooks] = useState([]);
    const [wishlist , setWishlist] = useState([]);

    const shared = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
    
    return <BookContext.Provider value={shared}>{children}</BookContext.Provider>;
};

export default BookProvider;