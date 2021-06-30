import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import WordCard from "./components/WordCard";
import AddWord from "./components/AddWord";
import NotFound from "./components/NotFound";

// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import { connect } from "react-redux";
// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두개를 가져올게요!
import { loadWord, createWord } from "./redux/modules/word";

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateToProps = (state) => ({
  word_list: state.wordItem.list,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadWord());
  },
  create: (new_item) => {
    dispatch(createWord(new_item));
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Switch>
          <Route path="/" exact component={WordCard} />
          <Route path="/write" exact component={AddWord} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f2f5;
`;

// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
