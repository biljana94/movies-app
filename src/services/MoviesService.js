import axios from 'axios';

class MoviesService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/';
    }

    getAll() {
        return axios.get('movies');
    }

    get(id) {
        return axios.get(`movies/${id}`);
    }
}

export const moviesService = new MoviesService();
