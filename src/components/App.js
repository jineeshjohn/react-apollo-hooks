import React from "react";
import Container from "./Container";
import ContactCreate from "./ContactCreate";
import ContactUpdate from "./ContactUpdate";
import ContactList from "./ContactList";
import { HashRouter, Route } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
