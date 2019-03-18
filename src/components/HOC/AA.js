/**
 * Created by karila on 2019/3/15.
 */
import React,{Component} from "react";
import {
  AComponent
} from "./style";
function AA(Template){
  return (
    class A extends Template{
      static displayName=`NewComponent(${getDisplayName(Template)})`
      constructor(props){
        super(props);
        this.state={
          value:""
        }
      }
      render(){
        const element =super.render();
        const newProps={...this.props}
        return (
          <AComponent>
            {React.cloneElement(element,newProps,element.props.children)}
          </AComponent>

        )
      }
    }
  )
}

function getDisplayName(template){
  return template.displayName||template.name||'component'
}
export default AA;
