import React, { Component } from "react";
import logoPic from "../../static/logo.png";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  Wrapper
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Wrapper>
          <Logo>
              <img src={logoPic} alt="logo"/>
          </Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">Aa</NavItem>
            <NavSearch />
          </Nav>
          <Addtion>
            <Button>注册</Button>
            <Button>写文章</Button>
          </Addtion>
        </Wrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
