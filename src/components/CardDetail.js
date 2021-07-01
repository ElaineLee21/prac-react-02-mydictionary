import React, { useRef } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

const CardDetail = (props) => {
  const dispatch = useDispatch();

  const word_ref = useRef();
  const desc_ref = useRef();
  const example_ref = useRef();

  const new_list = useSelector((state) => state.word.word_list);
  let word_index = parseInt(props.match.params.ind);

  const word = new_list[word_index] && new_list[word_index].word;
  const desc = new_list[word_index] && new_list[word_index].desc;
  const example = new_list[word_index] && new_list[word_index].example;

  const re_item = () => {
    // 수정 후 입력값
    const word = word_ref.current.value;
    const desc = desc_ref.current.value;
    const example = example_ref.current.value;

    // 새로 수정시키고 싶은 내용을 딕셔너리 형태로 저장
    const re_dict_item = { word: word, desc: desc, example: example };
    console.log(re_dict_item);
  };

  return (
    <AddContainer>
      <Title>단어 수정하기</Title>
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

      <Button
        onClick={() => {
          re_item();
        }}
      >
        수정하기
      </Button>
      <Button color="#E20000">삭제하기</Button>
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
  margin: 0px auto;
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
    padding: 5px 4px;
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
  margin: 0px auto;
  margin-top: 10px;
  border-style: none;
  &:hover {
    font-weight: bold;
  }
  ${(props) => (props.color ? `color: ${props.color};` : "")}
`;

export default CardDetail;
