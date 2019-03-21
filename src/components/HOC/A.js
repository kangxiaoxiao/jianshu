/**
 * Created by karila on 2019/3/15.
 */
import React,{Component} from "react";
import {
  AComponent
} from "./style";
function A(Template){
  return (
    class A extends Component{
      constructor(props){
        super(props);
        this.state={
          value:""
        }
      }
      render(){
        const {userAge,...otherProps} = this.props;
        const newProps={
          value:this.state.value,
          onInput:this.handleInputChange
        }
        return (
          <AComponent>
            我是A组件...
            <Template
              userAge="20"
              {...otherProps}
              {...newProps}
            ></Template>
          </AComponent>
        )
      }
      handleInputChange=(e)=>{
        this.setState({
          value:e.target.value
        })
      }
    }
  )
}
export default A;
