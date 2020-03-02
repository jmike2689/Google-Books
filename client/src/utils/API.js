import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_APIKEY;

export default {
  // Gets books from the Google API
  getBooks: function(bookTitle) {
    return axios.get("/api/google", {
      params: { q: bookTitle, key: API_KEY }
    });
  },
  // Gets all saved books. So clean. So simple.
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
