/**
 * Created by karila on 2019/3/13.
 */
import React,{Component} from "react";
import img from "../../static/images/timg.jpg"
import {
  Img
} from "./style"
class Cat extends Component{
  render(){
    const mouse = this.props.mouse;
    return (
      <Img src={img} style={{position:'absolute',left:mouse.x,top:mouse.y}}/>
    )
  }
}
export default Cat;