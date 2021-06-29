import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import WordCard from "./components/WordCard";
import AddWord from "./components/AddWord";
import NotFound from "./components/NotFound";

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

export default App;
