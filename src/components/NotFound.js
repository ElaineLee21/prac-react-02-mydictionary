import React from "react";
import styled from "styled-components";

const NotFound = (props) => {
  return (
    <Div>
      <Title>
        올바르지 않은
        <br /> 주소입니다.
      </Title>
      <Button
        onClick={() => {
          props.history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </Div>
  );
};

const Div = styled.div`
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100vw;
  margin: 8px;
  text-align: center;
  color: #454746;
`;

const Button = styled.button`
  width: 50vw;
  background-color: #a4a7ab;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 10px auto;
  border-style: none;
  &:hover {
    font-weight: bold;
  }
`;

export default NotFound;
