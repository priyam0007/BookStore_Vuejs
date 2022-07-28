import axios from 'axios';

const Customer_url = 'http://localhost:8098/addressbook';

class CustomerService {

  addCustomer(data){
    return axios.post(`${Customer_url}/addCustomer`, data)
  }

getAllCustomer() {
    return axios.get(`${Customer_url}/getAllCustomer`);
  }
}
export default new CustomerService()