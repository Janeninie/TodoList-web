"use client";

import styled from "@emotion/styled";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addToCart } from "@/redux/features/cartSlice";

export default function List() {
  const [form] = Form.useForm();

  const dispatch = useDispatch<AppDispatch>();
    const cartItems = useAppSelector((state) => state.cartSlice.items);
  const [list, setList] = useState([
    { label: 'Text your bf "I love you"  ', value: "love" },
    { label: 'Text your bf "I miss you"', value: "miss" },
    { label: "Smile~", value: "smile" },
    { label: "Hug your bf", value: "hug" },
  ]);
  let option: any = [
    { label: "Text your bf \"I love you\"  ", value: "love" },
    { label: "Text your bf \"I miss you\"", value: "miss" },
    { label: "Smile~", value: "smile" },
    { label: "Hug your bf", value: "hug" },
  ];
  const handleSubmit = (values: any) => {
    if (!values.task) {
      return;
    }
    
    makeList(values);
    form.resetFields();
  };

  const makeList = (list: any) => {
    if (list.task) {
        const items:any = {
            label: list.task,
            value: list.task
        }
        dispatch(addToCart(items));
    }
  }

  useEffect(() => {
    console.log("love");
  }, [list]);

  return (
    <div className="h-screen">
      <TaskContainer>
        <StyledForm form={form} onFinish={handleSubmit}>
          <FormItem1 name="task" className="mb-0 w-[200px]">
            <Input placeholder="what do you need to do?" width={200} />
          </FormItem1>
          <FormItem1 className="mb-0">
            <Space>
              <StyledButton type="link" htmlType="submit">
                + Add Task
              </StyledButton>
            </Space>
          </FormItem1>
        </StyledForm>
      </TaskContainer>
      <Container>
        <div>
          <GroupCheck options={cartItems} />
        </div>
      </Container>
      
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 85%;
  background-color: white;
  border-radius: 10px;
  font-size: 2rem;
  padding: 60px 60px;
  margin-bottom: 10px;
  overflow: auto;
`;

const Completed = styled.div`
    display: flex;
    height: 20%;
    background-color: white;
    border-radius: 10px;
    font-size: 2rem;
    padding: 60px 60px;
    `;

const GroupCheck = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  gap: 40px !important;
  padding-bottom: 60px;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  height: 15%;
  padding: 0px 40px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const StyledButton = styled(Button)`
  font-weight: bold !important;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FormItem1 = styled(Form.Item)`
  margin-bottom: 0px !important;
`;
