import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 120px;
  height: 31px;

  margin: 16px 24px 16px 0;
  float: left;
  color: white;
  font-size: 40px;
  line-height: 0.7;
  text-align: left;
`;

const ButtonWrapper = styled.button`
  width: 120px;
  height: 30px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: right;
  line-height:1.2;
  color: white;
  background: rgb(0, 153, 255);
  border: 0;
`;

const Header = () => {
  return (
    <Layout.Header>
      <LogoWrapper>Elevate</LogoWrapper>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Events</Menu.Item>
        <Menu.Item key="4">Profile</Menu.Item>
        <ButtonWrapper>Log out</ButtonWrapper>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
