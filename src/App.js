import React from "react";
import styled from "styled-components";
import { firestore } from "./firebase";

// Router
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadWordFB } from "./redux/modules/word";

// Components
import WordList from "./components/WordList";
import AddWord from "./components/AddWord";
import CardDetail from "./components/CardDetail";
import NotFound from "./components/NotFound";

const mapStateToProps = (state) => ({
  new_list: state.word.word_list,
  is_loaded: state.word.is_loaded,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadWordFB());
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <WordList
                  list={this.props.new_list}
                  history={this.props.history}
                />
              )}
            />
            <Route path="/addword" exact component={AddWord} />
            <Route path="/detail" exact component={CardDetail} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </React.Fragment>
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
