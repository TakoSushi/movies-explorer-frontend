class MovieApi {
  constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
  
  _handlePromise(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка при получении запроса ${res.status}`);
  }

  getInitialsMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
        method: 'GET',
        headers: this._headers,
    })
    .then((res) => {
      return this._handlePromise(res);
    })
  }
}

const movieApi = new MovieApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
      'Content-Type': 'application/json',
    }
});

export default movieApi;