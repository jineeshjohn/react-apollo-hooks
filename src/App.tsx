import React, { Component } from "react";
import logo from "./logo.svg";
import Container from "./components/Container";
import ContactCreate from "./components/ContactCreate";
import ContactUpdate from "./components/ContactUpdate";
import ContactList from "./components/ContactList";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Container>
            <Route exact path="/" component={ContactList} />
            <Route exact path="/contacts/new" component={ContactCreate} />
            <Route
              exact
              path="/contact/:id"
              render={props => {
                return (
                  <ContactUpdate contactItem={{ id: props.match.params.id }} />
                );
              }}
            />
          </Container>
        </HashRouter>
      </div>
    );
  }
}

export default App;
