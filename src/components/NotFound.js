import React from "react";
import styled from "styled-components";

const NotFound = (props) => {
  return (
    <div>
      <Title>올바르지 않은 주소입니다.</Title>
      <Button
        onClick={() => {
          props.history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
};

const Title = styled.h1`
  width: 100vw;
  margin: 8px;
  text-align: center;
  color: #454746;
`;

const Button = styled.button`
  width: 50vw;
  background-color: #e7e7e8;
  color: #eeeeee;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 10px auto;
  border-style: none;
`;

export default NotFound;
