import React from "react";
import Jumbotron from "reactstrap/lib/Jumbotron";
import "./add-immunity-footer.css"

export function AddImmunityFooter() {
  return (
    <Jumbotron className="footer-nav h-25">
      <p className="mb-0">Something missing from this list?</p>
      <p className="font-weight-bolder pt-0">Tell us if you are immune to an infection</p>
    </Jumbotron>
  )
}
