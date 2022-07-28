import axios from "axios";
const BASE_URL = 'http://localhost:8085/order';

class OrderService {

    addOrder(data) {
        return axios.post(`${BASE_URL}/insert`, data)
    }
    
}
export default new OrderService();