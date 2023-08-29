class UserApi {
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

  getUserData = () => {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify()
      })
      .then((res) => {
        return this._handlePromise(res);
    })
  }
  
  changeUserData = (UserData) => {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(UserData)
      })
      .then((res) => {
        return this._handlePromise(res);
    })
  }

}

const userApi = new UserApi({
  // baseUrl: 'https://api.kuzora-movies.nomoredomains.sbs',
  baseUrl: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default userApi;