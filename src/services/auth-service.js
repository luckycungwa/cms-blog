// src/services/auth-service.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/users/login`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (email, password, username) => {
  const response = await axios.post(`${API_URL}/users/register`, { email, password, username });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const response = await axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};
