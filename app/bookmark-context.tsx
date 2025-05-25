import React, {createContext, useState} from "react";

type BookmarkContextType = {
    bookmarks: string[];
    addBookmark: (bookmark: string) => void;
};

export const BookmarkContext = createContext<BookmarkContextType>({
    bookmarks: [],
    addBookmark: () => {},
});

export default function BookmarkProvider({children}: {children: React.ReactNode}) {
    const [bookmarks, setBookmarks] = useState<string[]>([]);

    const addBookmark = (bookmark: string) => {
        setBookmarks((prevBookmarks: string[]) => [...prevBookmarks, bookmark]);
    }

    return (
        <BookmarkContext.Provider value={{bookmarks, addBookmark}}>
            {children}
        </BookmarkContext.Provider>
    )
}