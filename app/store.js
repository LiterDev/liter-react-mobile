// import createHistory from 'history/createBrowserHistory';
import history from 'history';
import configureStore from './configureStore';

const initialState = {};
// const history = createHistory();
// exports.history = createHistory;
export default configureStore(initialState, history);
