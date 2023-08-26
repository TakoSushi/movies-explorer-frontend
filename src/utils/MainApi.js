class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
  
  _handlePromise(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка при получении объекта ${res.status}`);
  }

  getMyMovies() {
    return fetch(`${this._baseUrl}/movies`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include',
    })
    .then((res) => {
      return this._handlePromise(res);
    })
  }

  addNewMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(movie),
    })
    .then((res) => {
      return this._handlePromise(res);
    })
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include',
    })
    .then((res) => {
      return this._handlePromise(res);
    })
  }

}

const myMoviesApi = new Api({
  // baseUrl: 'https://api.kuzora-movies.nomoredomains.sbs',
  baseUrl: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default myMoviesApi;