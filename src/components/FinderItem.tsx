import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { BookNameContext } from "../context/context";
import FinderList from "./FinderList";
import MyInput from "./UI/input/MyInput";

interface FinderItemProps {}

const FinderItem: FunctionComponent<FinderItemProps> = () => {
    const [bookName, setBookName] = useState<string>("");

    const bookNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBookName(e.target.value);
    };

    return (
        <BookNameContext.Provider value={{ bookName }}>
            <MyInput onChange={bookNameChangeHandler} data-testid='main-input' />

            <FinderList />
        </BookNameContext.Provider>
    );
};

export default FinderItem;
