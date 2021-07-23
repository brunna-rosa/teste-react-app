import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "To-do",
    href: "/todo",
  },
  {
    label: "Formulário Reativo",
    href: "/form",
  },
  {
    label: "GitHub API",
    href: "/github-api",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#00bed8",
  },
  logo: {  
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "left",
  },
  menuButton:{
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar:{
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles();
  
  const displayDesktop = () => {
    return(
      <Toolbar className={toolbar}>
        {reactLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const reactLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      React App
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return(
        <Button
        {...{
          key: label,
          color: "inherit",
          to: href, 
          component: Link,
          className: menuButton
        }}
        >
          {label}
        </Button>
      );
    });
  };

  return(
    <header>
      <AppBar className={header}> {displayDesktop()} </AppBar>
    </header>
  );
  
}