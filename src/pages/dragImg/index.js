/**
 * Created by karila on 2019/3/13.
 */
import React,{Component} from "react";
import Mouse from "../../components/mouse"
import Cat from "../../components/cat"
class DragImg extends Component{
  render(){
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse}></Cat>
        )}></Mouse>
      </div>
    )
  }
}
export default DragImg;