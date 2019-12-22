
import axios from "axios"

export default {

    searchBooks: function (search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    },

    getBooks: function () {
        return axios.get("/api/books");
    },

    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function (saved) {
        return axios.post("/api/books", saved);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}