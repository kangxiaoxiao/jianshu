/**
 * Created by karila on 2019/3/6.
 */
import {fromJS} from "immutable";
import * as constans from "./constans"
const  defaultState=fromJS({
  isFocus:false,
  list:[],
  tagPage:0,
  mouseIn:false
});
function reducer(state=defaultState,action){
  switch(action.type){
    case constans.INPUT_FOCUS:
      return state.set("isFocus",action.value);
    case constans.TABS_LIST:
      return state.set("list",action.list);
    case constans.TABS_MOUSE_IN:
      return state.set("mouseIn",true);
    case constans.TABS_MOUSE_LEAVE:
      return state.set("mouseIn",false);
    case constans.TABS_PAGE:
      return state.set("tagPage",action.value);
    default:
      return state;
  }
}
export default  reducer;