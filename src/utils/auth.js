class Auth {
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

  signUp = (newUserData) => {
    return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(newUserData)
      })
      .then((res) => {
        return this._handlePromise(res);
    })
  }
  
  signIn = (UserData) => {
    return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(UserData)
      })
      .then((res) => {
        return this._handlePromise(res);
    })
  }

  signOut = () => {
    return fetch(`${this._baseUrl}/signout`, {
        method: 'POST',
        credentials: 'include',
      })
      .then((res) => {
        return this._handlePromise(res);
    })
  }
}

const auth = new Auth({
  // baseUrl: 'https://api.kuzora-movies.nomoredomains.sbs',
  baseUrl: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default auth;