import plainRequest from './request';

const rootApiUrl = 'http://localhost:2017';



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
  return response.json();
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


export default function request(url, options) {
  url = rootApiUrl + url;
  const getLocalStorageToken = localStorage.getItem('auth_token');
  console.log('@@@@@@@request', { url, options, getLocalStorageToken });
  // options = _.set(options, 'headers.Authorization', `Bearer ${getLocalStorageToken}`)
  return plainRequest(url, options);
}
