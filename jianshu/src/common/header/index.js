import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

//header和store建立连接
import { connect } from "react-redux";
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
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <Wrapper>
          <Logo>
            <img src={logoPic} alt="logo" />
          </Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">Aa</NavItem>
            <CSSTransition
            timeout={200}
            in={this.state.focused}
            classNames="slide"
            >
              <NavSearch
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
                className={this.state.focused ? "focused" : ""}
              />
            </CSSTransition>
          </Nav>
          <Addtion>
            <Button className="sign">注册</Button>
            <Button className="write">写文章</Button>
          </Addtion>
        </Wrapper>
      </HeaderWrapper>
    );
  }
  handleInputFocus() {
    this.setState({
      focused: true
    });
  }
  handleInputBlur() {
    this.setState({
      focused: false
    });
  }
}

//映射关系
const mapStateToProps = state => {
  return {
    //输入框
    focused: state.focused
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
