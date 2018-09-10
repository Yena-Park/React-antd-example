import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 120px;
  height: 30px;
  float: right;
  line-height: 1;
  color: #595a5b;
  background: #eef0f3;
  border: 0;
`;

const LinkWrapper = styled.a`
  width: 120px;
  height: 30px;
  float: right;
  line-height: 2;
  color: #595a5b;
  background: #eef0f3;
  border: 0;
`;

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      Elevate hackathon ©2018 Created by Ant UED
      <LinkWrapper href="https://github.com/EdwinYoon/DevLBRY">GitHub</LinkWrapper>
      <ButtonWrapper>Team</ButtonWrapper>
    </Layout.Footer>
  );
};

export default Footer;