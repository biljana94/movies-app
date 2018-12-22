import http from './http-service.js';

class MoviesService {

    //default vrednosti za take i skip parametre
    getAll(title = '', take = 10, skip = 5) {
        return http.get('movies', { params: { title, take, skip } })
            .then(({ data }) => data);
    }

    get(id) {
        return http.get(`movies/${id}`)
            .then(response => response);
    }
}

export const moviesService = new MoviesService();
