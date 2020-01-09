import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gameReducers from './gameReducers';
import playerReducer from './playerReducer';

export default combineReducers({
    auth: authReducer,
    game: gameReducers,
    player: playerReducer
});