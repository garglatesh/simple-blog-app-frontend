import axiosInstance from './axiosInstance';
import axios, { AxiosError } from 'axios';
import { Post } from '../types/post';

/**
 * Fetches all posts from the server.
 * @returns {Promise<Post[]>}  - returns array of Post objects
 * @throws {AxiosError | Error} - Re-throws an error if the request fails.
 */

export const fetchPosts = async (): Promise<Post[] | null> => {
  try {
    const response = await axiosInstance.get<Post[]>('/posts');
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching posts:', error);
    return null;
  }
};

/**
 * Fetches a specific post by its ID from the server.
 * @param {string} id - The ID of the post to fetch.
 * @returns {Promise<Post | null>} returns Post object if found, or null if not found or if an error occurs.
 * @throws {Error} - Re-throws any unexpected errors after logging them.
 */
export const fetchPostById = async (id: string): Promise<Post | null> => {
  try {
    const response = await axiosInstance.get<Post>(`/posts/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching post with ID ${id}: ${error.response?.status} ${error.response?.statusText}`);
      return null; // You can return null or handle it in another simple way
    } else {
      console.error('An unexpected error occurred:', error);
      return null;
    }
  }
};