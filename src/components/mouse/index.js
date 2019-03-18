/**
 * Created by karila on 2019/3/13.
 */
import React,{Component} from "react";
import {
  MouseWrapper
} from "./style"
class Mouse extends  Component{
  constructor(props){
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state={x:0,y:0}
  }
  handleMouseMove(el,e){
    let x=0;
    let y=0;
    if((e.clientX-el.offsetLeft+50)>el.offsetWidth){
      x=el.offsetWidth-50+'px';
    }else{
      x=e.clientX-el.offsetLeft+'px'
    }
    if((e.clientY-el.offsetTop+50)>el.offsetHeight){
      y=el.offsetHeight-50+'px';
    }else{
      y=e.clientY-el.offsetTop+'px'
    }
    this.setState({
      x:x,
      y:y
    })
  }

  render(){
    return (
      <MouseWrapper
        ref={(el)=>{this.mouseWrapperEl=el}}
        onMouseMove = {(e)=>{this.handleMouseMove(this.mouseWrapperEl,e)}}
      >
        {this.props.render(this.state)}
      </MouseWrapper>
    )
  }
}
export default Mouse;