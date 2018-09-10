import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const Content = () => {
  return (
    <Layout.Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Layout.Content>
  );
}

export default Content;