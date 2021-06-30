import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const AddWord = (props) => {
  const dispatch = useDispatch();

  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);

  const handleOnClick = (event) => {
    console.log("handle");
  };

  return (
    <AddContainer>
      <Title>단어 추가하기</Title>
      <InputWrapper>
        <p>단어</p>
        <input ref={word_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>설명</p>
        <input ref={desc_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>예시</p>
        <input ref={example_ref} />
      </InputWrapper>

      <Button onClick={handleOnClick}>추가하기</Button>
    </AddContainer>
  );
};

const Title = styled.h1`
  width: 100vw;
  margin: 8px;
  text-align: center;
  color: #454746;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const InputWrapper = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 10px auto;
  box-sizing: border-box;
  background-color: #e7e7e8;
  & > p {
    text-decoration: underline;
    font-size: 8px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 100%;
    padding: 12px 4px;
    margin: 6px 0px;
    box-sizing: border-box;
    border-style: none;
  }
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

export default AddWord;
