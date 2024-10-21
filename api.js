import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Adjust the base URL as needed
});

export const getAllDataPosts = async () => {
  const response = await instance.get('/posts');
  return response.data;
};

export const addPost = async (payload) => {
  const response = await instance.post('/posts', payload);
  return response;
};

export const updatePost = async (id, payload) => {
  const response = await instance.put(`/posts/${id}`, payload);
  return response;
};
