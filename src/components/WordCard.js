import React from "react";
import styled from "styled-components";

const WordCard = ({ word }) => {
  const myWords = word;
  console.log({ word }, word);

  return (
    <WordList>
      {myWords.map((word, index) => {
        return <WordItem key={index}>{word}</WordItem>;
      })}
    </WordList>
  );
};

const WordList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const WordItem = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: #e0eef7;
`;

export default WordCard;
