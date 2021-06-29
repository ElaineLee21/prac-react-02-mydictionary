import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import WordCard from "./components/WordCard";
import AddWord from "./components/AddWord";
import NotFound from "./components/NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ["react", "component", "state"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
  }

  addWord = () => {
    let word = this.state.word;
    const newWord = this.text.current.value;
    this.setState({ word: [...word, newWord] });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Title>My Own Dictionary</Title>
          <Line />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <WordCard word={this.state.word} history={this.props.history} />
              )}
            />
            <Route path="/addword" component={AddWord} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <div>
          <input type="text" ref={this.text} />
          <button onClick={this.addWord}>단어 추가</button>
        </div>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: #548ba1;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
