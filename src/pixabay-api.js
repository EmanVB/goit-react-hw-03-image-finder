import axios from "axios";

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43115668-a2f7633784c8066bb06af8b7b';

export const getAPI = async (query, page) => {
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page12`;

    const response = await axios.get(url);

    return response.data;
}