/**
 * Created by karila on 2019/3/6.
 */
import React,{ PureComponent } from "react";
import LogoImg from "../../static/images/logo.png";
import Tags from "../../components/tags";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  HeaderCon,
  Btn,
  InputWrapper,
  InputCon,
  Input,
  TagsWrapper,
} from "./style"
class Header extends PureComponent{
  render(){
    const {isFocus,list,handleChangeFocus,handleMouseEnter,handleMouseLeave}=this.props;
    return (
      <HeaderWrapper>
        <HeaderCon>
          <div className="leftItem">
            <img src={LogoImg} alt=""/>
          </div>
          <div className="centerItem">
            <Btn className="left active" >首页{!isFocus}</Btn>
            <Btn className="left">下载APP</Btn>
            <InputWrapper className="left">
              <InputCon>
                <CSSTransition
                   in={isFocus}
                   timeout={300}
                    classNames="inputStar"
                >
                  <Input
                    placeholder="搜索"
                    onFocus={()=>{handleChangeFocus(true,list)}}
                    onBlur={()=>{handleChangeFocus(false)}}
                  />
                </CSSTransition>

                <i className={isFocus?'iconfont isFocus':'iconfont'}>&#xe63a;</i>
              </InputCon>
              <TagsWrapper
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Tags></Tags>
              </TagsWrapper>
            </InputWrapper>
            <Btn className="right">Aa</Btn>
            <Btn className="right">登录</Btn>
          </div>
          <div className="rightItem">
            <Btn className="primary empty">注册</Btn>
            <Btn className="primary">写文章</Btn>
          </div>
          <div style={{clear:"both"}}></div>
        </HeaderCon>
      </HeaderWrapper>
    )
  }
};
const mapStateToProps=(state)=>{
  return {
    isFocus:state.getIn(["header","isFocus"]),
    list:state.getIn(["header","list"])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleChangeFocus(onFocus,list){
      dispatch(actionCreators.getFocusAction(onFocus,list));
    },
    handleMouseEnter(){
      dispatch(actionCreators.getMouseIn())
    },
    handleMouseLeave(){
      dispatch(actionCreators.getMouseLeave())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);