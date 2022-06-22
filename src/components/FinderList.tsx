import React, {
    FunctionComponent,
    useEffect,
    useState,
    MouseEvent,
    useContext,
} from "react";
import { BookItem, BookInfo } from "../types/types";
import { axiosInstance } from "../api/fetchBooks";
import UseDebounce from "../hooks/useDebounce";
import MyModal from "./UI/Modal/MyModal";
import { BookItemContext, BookNameContext } from "../context/context";
import BookList from "./bookItems/BookList";
import BookModal from "./bookItems/BookModal";

interface FinderListProps {}

const FinderList: FunctionComponent<FinderListProps> = () => {
    const { bookName } = useContext(BookNameContext);

    const [bookList, setBookList] = useState<BookInfo[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [bookModalId, setBookModalId] = useState<string>("");
    const [bookModalInfo, setBookModalInfo] = useState<BookInfo>();
    const [loading, setLoading] = useState<boolean>(false);
    const debouncedSearch = UseDebounce(fetchBooks, 700);

     async function fetchBooks(bookName: string) {
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

    function infoClickHandler(id: string, e?: MouseEvent<HTMLButtonElement>) {
        setVisible(true);
        setBookModalId(id);

        setBookModalInfo(bookList.filter((book) => book.id === id)[0]);
    }

    useEffect(() => {
        debouncedSearch(bookName);
    }, [bookName]);

    return (
        <BookItemContext.Provider
            value={{ bookList, visible, bookModalId, bookModalInfo, loading }}
        >
            <BookList func={infoClickHandler} />
            <MyModal visible={visible} setVisible={setVisible} data-testid='list-modal'>
                <BookModal />
            </MyModal>
        </BookItemContext.Provider>
    );
};

export default FinderList;
