import React from "react";
import Header from "./Header";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
const ContainerWrapper = ({ children }) => (
  <div className="container">
    <Container maxWidth="sm">
        <Header />
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >{children}</Typography>
      </Container>
  </div>
);
export default ContainerWrapper;
