import _ from 'lodash';
import axios from 'axios';
import store from 'store'; // root store
import { createStructuredSelector } from 'reselect';
import { selectAuth, makeSelectAccessToken } from 'containers/Auth/selectors';

const storeState = createStructuredSelector({
  // auth: selectAuth(),
  accessToken: makeSelectAccessToken()
});

const rootApiUrl = 'http://localhost:8080';
// const rootApiUrl = 'http://192.168.1.81:8080';
// const rootApiUrl = 'http://192.168.0.182:8080';
// axios.defaults.headers.post['header1'] = 'value'; // for POST requests
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, data = {}) {
  console.log('@@@ axios.request ::: ');
  // console.log(data);
  url = rootApiUrl + url;

  const { withAuth = false, withRefreshToken = false } = data;
  const authStore = selectAuth(store.getState());
  const accessToken = authStore.getIn(['data', 'accessToken']);
  // console.log({ withRefreshToken, accessToken, withAuth });

  const headers = {};
  if (accessToken || withAuth) {
    headers.Authorization = `Bearer ${accessToken}`;
  } else if (withRefreshToken) {
    const refreshToken = localStorage.getItem('refresh_token');
    headers.Authorization = `Bearer ${refreshToken}`;
  }
  // console.log('headers', headers);

  _.set(data, 'headers', _.merge(_.get(data, 'headers') || {}, headers));
  // console.log('axios data', data);
  return axios(Object.assign({}, { url }, data))
    .then(checkStatus)
    .then(parseJSON);
}
