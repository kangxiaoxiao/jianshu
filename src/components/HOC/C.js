/**
 * Created by karila on 2019/3/15.
 */
import React,{Component} from "react";
import A from "./A.js"
class C extends Component{
  render(){
    return (
      <div>
        我是C组件
        <div>姓名：{this.props.userName}</div>
        <div>年龄：{this.props.userAge}</div>
        <div>性别：{this.props.userSex}</div>
      </div>
    )
  }
}
export default A(C);