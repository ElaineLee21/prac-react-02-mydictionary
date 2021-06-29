import React from "react";
import styled from "styled-components";

const WordCard = (props) => {
  const myWords = [
    {
      id: "card_0",
      word: "react",
      desc: "to behave in a particular way as a result of something",
      example: "You never know how he is going to react.",
    },
    {
      id: "card_1",
      word: "component ",
      desc: "one of several parts of which something is made",
      example: "Nitrogen is the main component of air.",
    },
    {
      id: "card_2",
      word: "programming",
      desc: "the process of writing and testing computer programs",
      example:
        "There are several different kinds of programming languages which have been used in the IT industry.",
    },
  ];

  return (
    <WordList>
      <WordContent>
        <Title>My Own dictionary</Title>
        {myWords.map((w) => {
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
              <Text color="#6C8BA7">{w.example}</Text>
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
  background-color: #d3d3d6;
  color: #eeeeee;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
`;

export default WordCard;
