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
              ref={this.refc.bind(this)}
              {...newProps}
            ></Template>
          </AComponent>
        )
      }
      refc(instance){
        instance.getName && console.log(instance.getName())
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
