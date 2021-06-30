import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const WordCard = (props) => {
  const word_list = useSelector((state) => state.wordItem.word_list);

  return (
    <WordList>
      <WordContent>
        <Title>Today's Vocab</Title>
        {word_list.map((w) => {
          return (
            <WordItem key={w.id}>
              <Text color="#888888" size="8px" underline>
                단어
              </Text>
              <Text>{w.word}</Text>
              <Text color="#888888" size="8px" underline>
                설명
              </Text>
              <Text>{w.desc}</Text>
              <Text color="#888888" size="8px" underline>
                예시
              </Text>
              <Text color="#5D88C0">{w.example}</Text>
            </WordItem>
          );
        })}
        <AddButton
          onClick={() => {
            props.history.push("/write");
          }}
        >
          +
        </AddButton>
      </WordContent>
    </WordList>
  );
};

const Title = styled.h1`
  width: 100vw;
  margin: 8px;
  text-align: center;
  color: #454746;
`;

const WordList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
`;

const WordContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WordItem = styled.div`
  width: 50vw;
  padding: 16px;
  margin: 8px;
  background-color: #e7e7e8;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 5px 0px;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #a4a7ab;
  color: #eeeeee;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  margin: 15px;
  &:hover {
    color: #ffffff;
    font-weight: bold;
  }
`;

export default WordCard;
