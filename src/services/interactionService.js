import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const likePost = async (postId) => {
    const response = await axios.post(`${API_URL}/likes/like/${postId}`);
    return response.data;
  };
  
  export const getComments = async (postId) => {
    const response = await axios.get(`${API_URL}/comments/${postId}`);
    return response.data;
  };

  export const commentOnPost = async (postId, content) => {
    const response = await axios.post(`${API_URL}/comments/comment/${postId}`, { content });
    return response.data;
  };


