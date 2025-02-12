import axios from 'axios';


const BASE_URL = process.env.NEXT_BASE_API_URL || 'https://ultrafix.pro/api/v1';
const BASE_PUBLIC_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'https://ultrafix.pro/api/v1/public';

export const fetchAllBlogs = async (skip = 0, limit = 100) => {
    try {
        const response = await axios.get(`${BASE_URL}/blog/posts`, { params: { skip, limit } });
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return null;
    }
};


export const fetchCitiesMinlist = async (skip = 0, limit = 100) => {
    try {
        const response = await axios.get(`${BASE_PUBLIC_URL}/cities/minlist`, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        return null;
    }
};
