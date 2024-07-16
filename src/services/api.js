// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';  // Updated to match backend port

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const searchPosts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: { search: query }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};
