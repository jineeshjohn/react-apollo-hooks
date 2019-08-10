import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Home from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <nav className="level">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Avatar pr={3}>
            <Home />
          </Avatar>
        </Link>
        <Link to="/contacts/new">
          <Button>
            <AddIcon />
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  </nav>
);
export default Header;
