// https://api.kuzora-movies.nomoredomains.sbs

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
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'a403427d-ff14-4a62-bf09-33c59e30bcff',
    'Content-Type': 'application/json'
  }
});

export default api;