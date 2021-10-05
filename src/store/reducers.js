import { combineReducers } from 'redux';
import { reducer as weatherReducer } from '../reducer/weather/reducer';

const reducers = combineReducers({
  weather: weatherReducer,
});
export default reducers;
