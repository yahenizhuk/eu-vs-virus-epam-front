import Jumbotron from "reactstrap/lib/Jumbotron";
import React from "react";

import "./header.css";

export function Header({ children }) {
  return (
    <Jumbotron fluid className="header pt-5">
      {children}
    </Jumbotron>
  )
}
