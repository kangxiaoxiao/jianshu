/**
 * Created by karila on 2019/3/6.
 */
import axios from "axios";
import * as constans from "./constans";
import {fromJS} from "immutable"
const changeFocusAction=(value)=>({
  type:constans.INPUT_FOCUS,
  value
})
const changeTabsList = (list)=>({
  type:constans.TABS_LIST,
  list:fromJS(list)
})
export const getFocusAction = (value,list)=>{
  return (dispatch)=>{
    console.log({
      value:value,
      list:list
    })
    if(list && list.size === 0){
      axios.get("/api/tabs.json").then(res=>{
        if(res.data.code === 200){
          dispatch(changeTabsList(res.data.data))
        }
      }).catch(err=>{
        console.log(err);
      })
    }
    dispatch(changeFocusAction(value));
  }
}
export const getMouseIn = ()=>({
  type:constans.TABS_MOUSE_IN
})
export const getMouseLeave = ()=>({
  type:constans.TABS_MOUSE_LEAVE
})

export const getTabPageAction = (value)=>({
  type:constans.TABS_PAGE,
  value
})