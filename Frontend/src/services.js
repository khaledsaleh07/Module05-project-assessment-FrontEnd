import axios from 'axios';

const API_URL = 'http:localhost/'; 

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/user/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  register: async (userData) => {
    try {
      await axios.post(`${API_URL}/auth/user/signup`, userData);
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default AuthService;
