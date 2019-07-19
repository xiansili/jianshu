import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  position: relative;
  height: 100%;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 56px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  margin-right: 10px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  height: 38px;
  width: 160px;
  border-radius: 19px;
  outline: none;
  border: none;
  margin-top: 8px;
  margin-left: 10px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  &:: {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: left;
  text-align: center;

  &.sign {
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236, 97, 73, 0.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
  }
  &.write {
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
`;
