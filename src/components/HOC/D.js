/**
 * Created by karila on 2019/3/15.
 */
import React,{Component} from "react";
import AA from "./AA.js"
class D extends Component{
  render(){
    return (
      <div>
        我是D组件
        <div>姓名：{this.props.username}</div>
        <div>年龄：{this.props.userage}</div>
        <div>性别：{this.props.usersex}</div>
      </div>
    )
  }
}
export default AA(D);