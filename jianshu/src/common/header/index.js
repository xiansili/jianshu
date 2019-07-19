import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

//header和store建立连接
import { connect } from "react-redux";
import logoPic from "../../static/logo.png";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoChange,
  SearchInfoItem,
  SearchInfoList,
  Addtion,
  Button,
  Wrapper
} from "./style";

class Header extends Component {
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoChange>换一批</SearchInfoChange>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
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
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
                className={this.props.focused ? "focused" : ""}
              />
            </CSSTransition>
            {this.getListArea(this.props.focused)}
          </Nav>
          <Addtion>
            <Button className="sign">注册</Button>
            <Button className="write">写文章</Button>
          </Addtion>
        </Wrapper>
      </HeaderWrapper>
    );
  }
}

//映射关系
const mapStateToProps = state => {
  return {
    //输入框
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  };
};

//改变内容
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getList());
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
