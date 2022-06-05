export interface BookInfo{
    
    id:string;
    volumeInfo:{
        title:string;
        subtitle:string;
        descriptions:string;
        authors:string[];
        publishedDate: number | null;
        pageCount: number | null;
        previewLink: string;
        imageLinks?:{thumbnail: string | undefined }
    }
}

export interface BookItem{

    items:BookInfo[]

}

export interface BookContextI{
    bookName: string ;
}

export interface BookItemContextI{
    bookList: BookInfo[] ;
    visible:boolean;
    bookModalId:string;
    bookModalInfo: BookInfo | undefined
    loading:boolean
}

