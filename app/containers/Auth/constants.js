/*
 * UserConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const AUTH = 'liter-react-mobile/Auth/AUTH';

export const LOGIN_REQUEST = 'liter-react-mobile/Auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'liter-react-mobile/Auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'liter-react-mobile/Auth/LOGIN_ERROR';

export const LOGOUT_REQUEST = 'liter-react-mobile/Auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'liter-react-mobile/Auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'liter-react-mobile/Auth/LOGOUT_ERROR';

export const AUTH_USER_INFO_REQUEST = 'liter-react-mobile/Auth/AUTH_USER_INFO_REQUEST';
export const AUTH_USER_INFO_SUCCESS = 'liter-react-mobile/Auth/AUTH_USER_INFO_SUCCESS';
export const AUTH_USER_INFO_ERROR = 'liter-react-mobile/Auth/AUTH_USER_INFO_ERROR';

export const AUTH_GET_ACC_TOKEN_REQUEST = 'liter-react-mobile/Auth/AUTH_GET_ACC_TOKEN_REQUEST';
export const AUTH_GET_ACC_TOKEN_SUCCESS = 'liter-react-mobile/Auth/AUTH_GET_ACC_TOKEN_SUCCESS';
export const AUTH_GET_ACC_TOKEN_ERROR = 'liter-react-mobile/Auth/AUTH_GET_ACC_TOKEN_ERROR';
