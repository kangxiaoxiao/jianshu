/**
 * Created by karila on 2019/3/6.
 */
import {
  combineReducers
} from 'redux-immutable';
import {reducer as TagsReducer} from "../pages/home/store";
import {reducer as headerReducer} from "../common/header/store";
export default combineReducers({
  home:TagsReducer,
  header:headerReducer
})