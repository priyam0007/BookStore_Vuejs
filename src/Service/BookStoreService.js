import axios from "axios";
const Book_Store_URL = 'http://localhost:8098/book';

class BookStoreService {

    getAllBooks() {
        return axios.get(`${Book_Store_URL}/getAll`);
      }
    insertBook() {
        return axios.post(`${Book_Store_URL}/insert`);
      }
}
export default new BookStoreService();


