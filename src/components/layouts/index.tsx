"use client";
import { COLOR_WHITE } from "@/config/color";
import styled from "@emotion/styled";
import { Layout } from "antd";
import { ReactNode, useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import TopLayout from "./HeaderLayout";

type Props = {
  children: ReactNode;
};
const LayoutClient = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="flex-row min-h-screen">
      <Layout>
        <TopLayout/>
        {children}
      </Layout>
    </Layout>
  );
};

export default LayoutClient;
