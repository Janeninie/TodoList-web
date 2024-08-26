"use client";
import { UnorderedListOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import { useState } from "react";

const TopLayout = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const { Title, Text } = Typography;
  return (
    <StyledHeader>
      <Image
        src={"/images/TodoLogo.jpg"}
        className="w-auto h-full"
        alt="Logo"
        width={100}
        height={20}
      />
      <Title className="pt-2" level={5}>
        My To-Do List
      </Title>
    </StyledHeader>
  );
};

export default TopLayout;

const StyledHeader = styled(Header)`
  position: fixed !important;
  background: white;
  width: 100%;
  height: 52px;
  padding: 0px;
  align-items: center;
  display: flex;
  z-index: 8;
  gap: 20px;
`;
