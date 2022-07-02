import { Dispatch, SetStateAction } from "react";
import { BookItem, BookInfo } from "../types/types";
import { axiosInstance } from "./fetchBooks";


async function fetchBooks(
    bookName: string,
    setBookList: Dispatch<SetStateAction<BookInfo[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    ) {
    setBookList([]);
    if (bookName) {
        try {
            setLoading(true);

            await axiosInstance
                .get<BookItem>(bookName)
                .then((res) => res.data)
                .then((res) => {
                    let result: BookInfo[] = [];
                    res.items.map((book) => {
                        const book_id = book.id,
                            book_title = book.volumeInfo?.title,
                            book_subtitle = book.volumeInfo?.subtitle,
                            book_descriptions =
                                book.volumeInfo?.descriptions,
                            book_authors = book.volumeInfo?.authors,
                            book_pageCount = book.volumeInfo?.pageCount,
                            book_previewLink = book.volumeInfo?.previewLink,
                            book_publishedDate =
                                book.volumeInfo?.publishedDate,
                            book_imageLinks =
                                book.volumeInfo.imageLinks?.thumbnail;

                        result.push({
                            id: book_id,

                            volumeInfo: {
                                title: book_title,
                                subtitle: book_subtitle,
                                descriptions: book_descriptions,
                                authors: book_authors,
                                pageCount: book_pageCount,
                                previewLink: book_previewLink,
                                publishedDate: book_publishedDate,
                                imageLinks: {
                                    thumbnail: book_imageLinks,
                                },
                            },
                        });
                    });
                    setBookList(result);
                });
        } catch (e) {
            setLoading(false);
            return <h1>Book list uploading error!</h1>;
        }
        setLoading(false);
    }
}

export default fetchBooks