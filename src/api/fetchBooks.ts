import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance =axios.create({
    baseURL:'https://www.googleapis.com/books/v1/volumes?q=',
    responseType:'json'

})