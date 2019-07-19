import React from "react";
import { CSSTransition } from "react-transition-group";
import {actionCreators} from './store'

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

const Header = props => {
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
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              className={props.focused ? "focused" : ""}
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
};

//映射关系
const mapStateToProps = state => {
  return {
    //输入框
    focused: state.getIn(['header','focused'])
  }
}

//改变内容
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
