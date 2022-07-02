import React, {
    FunctionComponent,
    useEffect,
    useState,
    MouseEvent,
    useContext,
} from "react";
import {  BookInfo } from "../types/types";
import UseDebounce from "../hooks/useDebounce";
import MyModal from "./UI/Modal/MyModal";
import { BookItemContext, BookNameContext } from "../context/context";
import BookList from "./bookItems/BookList";
import BookModal from "./bookItems/BookModal";
import fetchBooks from "../api/setBooks";

interface FinderListProps {}

const FinderList: FunctionComponent<FinderListProps> = () => {
    const { bookName } = useContext(BookNameContext);

    const [bookList, setBookList] = useState<BookInfo[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [bookModalId, setBookModalId] = useState<string>("");
    const [bookModalInfo, setBookModalInfo] = useState<BookInfo>();
    const [loading, setLoading] = useState<boolean>(false);
    const debouncedSearch = UseDebounce(uploadBooks, 700);


    async function uploadBooks(){
        const getBooks = await fetchBooks(bookName, setBookList,setLoading)

        return getBooks

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
