"use client";
import LayoutClient from "@/components/layouts";
import styled from "@emotion/styled";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <LayoutClient>
        <StyledContent>{children}</StyledContent>
      </LayoutClient>
    </>
  );
};

export default RootLayout;

const StyledContent = styled(Content)`
  margin: 68px 120px 16px 120px;
  padding: 12px 12px 24px 12px;
  min-height: 280px;
  border-radius: 10px;
  background-color: transparent;
  @media (max-width: 834px) {
    margin: 0px;
    padding: 0px 10px 10px 10px;
  }
`;
