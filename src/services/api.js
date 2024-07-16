// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';  // Updated to match backend port

// get all post but use pagination to load posts by sets (for optimization nton nton)
export const getPosts = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: { page },
    });
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
