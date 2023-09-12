import Cookies from "js-cookie";

const TOKEN_COOKIE = "skhole.token";
const REFRESH_TOKEN_COOKIE = "skhole.refresh";
const USER_ID_COOKIE = "skhole.user.id";

const ONE_HOUR = 60 * 60 * 1000;
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

class AuthTokenManager {
  getAuthToken() {
    return {
      accessToken: this._getCookie(TOKEN_COOKIE),
      refreshToken: this._getCookie(REFRESH_TOKEN_COOKIE),
    };
  }

  setAuthToken({ refreshToken, accessToken, user_id }) {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
    this._setUserId(user_id);
  }

  setRefreshToken(refreshToken) {
    this._setCookie(REFRESH_TOKEN_COOKIE, refreshToken, SEVEN_DAYS);
  }

  setAccessToken(accessToken) {
    this._setCookie(TOKEN_COOKIE, accessToken, ONE_HOUR);
  }

  removeAuthToken() {
    this._removeCookie(USER_ID_COOKIE);
    this._removeCookie(REFRESH_TOKEN_COOKIE);
    this._removeCookie(TOKEN_COOKIE);
  }

  _getExpiryTime(duration) {
    return new Date(new Date().getTime() + duration);
  }

  _setCookie(name, value, duration) {
    Cookies.set(name, value, {
      secure: true,
      sameSite: "strict",
      expires: this._getExpiryTime(duration),
    });
  }

  _getCookie(name) {
    return Cookies.get(name);
  }

  _removeCookie(name) {
    Cookies.remove(name);
  }

  _setUserId(user_id) {
    this._setCookie(USER_ID_COOKIE, user_id, SEVEN_DAYS);
  }
}

export default new AuthTokenManager();
