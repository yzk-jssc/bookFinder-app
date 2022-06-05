import { createContext } from "react";
import { BookContextI, BookItemContextI, } from "../types/types";

const defaultNameState: BookContextI = {
    bookName: '',

}

const defaultItemState:BookItemContextI = {
    visible: false,
    bookList:[],
    bookModalId:'',

    bookModalInfo: {
        id:'',
        volumeInfo:{
            authors:[],
            descriptions: '',
            pageCount:null,
            previewLink:'',
            publishedDate:null,
            subtitle: '',
            title: '',
            imageLinks:{
                thumbnail:''
            },
        }
    } || undefined,
    loading:false
}


export const BookNameContext = createContext(defaultNameState)

export const BookItemContext = createContext(defaultItemState)
