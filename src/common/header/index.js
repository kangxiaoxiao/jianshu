/**
 * Created by karila on 2019/3/6.
 */
import React,{ Component } from "react";
import LogoImg from "../../static/images/logo.png";
import {Link} from "react-router-dom"
import {
  HeaderWrapper,
  HeaderCon,
  Btn
} from "./style"
const Header = ((WrapperComponent)=>(
  class Header extends Component{
    render(){
      return (
        <div>
          <HeaderWrapper>
            <HeaderCon>
              <div className="leftItem">
                <Link to="/home"><img src={LogoImg} alt=""/></Link>
              </div>
              <div className="centerItem">
                <Btn className="left active" >
                  <Link to="/newsDetail">首页</Link>
                </Btn>
                <Btn className="left">下载APP</Btn>
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
          <WrapperComponent />
        </div>
      )
    }
  }
))
export default Header;