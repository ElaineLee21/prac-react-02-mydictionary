import React from "react";

const NotFound = (props) => {
  console.log(props);
  return (
    <div>
      <h3>올바르지 않은 주소입니다.</h3>
      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
