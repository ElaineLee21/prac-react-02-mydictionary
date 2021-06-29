import React from "react";
import styled from "styled-components";

const AddWord = (props) => {
  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);

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

      {/* 아직은 이 버튼에 아무런 동작도 주지 않을거예요 :) */}
      <Button>추가하기</Button>
    </AddContainer>
  );
};

// 제목 스타일을 잡아줄 거예요.
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

// input이 들어갈 부분을 감싸줄거예요. 배경색도 흰색으로 줘볼게요!
// 이 div 아래에 있는 p 태그에 접근할 때는 & > p로 접근할 수 있어요.
// 이 div 아래에 있는 input 태그에 접근할 때는 & > input으로 접근할 수 있어요.
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

// 추가하기 버튼 스타일을 잡아줄거예요.
const Button = styled.button`
  width: 50vw;
  background-color: #d3d3d6;
  color: #454746;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 10px auto;
  border-style: none;
`;

export default AddWord;
