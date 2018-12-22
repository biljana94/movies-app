import http from './http-service.js';

class MoviesService {

    //default vrednosti za take i skip parametre
    getAll(title = '', take = 10, skip = 0) {
        return http.get('movies', { params: { title, take, skip } })
            .then(({ data }) => data);
    }

    get(id) {
        return http.get(`movies/${id}`)
            .then(response => response);
    }

    add(movie) {
        return http.post('movies', movie);
    }
}

export const moviesService = new MoviesService();
