import React from "react";
import {ImmunityItemExtended} from "./immunity-item-extended";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import "./immunity-item-extended.css";
import "./immunities-list-extended.css";

export function ImmunitiesListExtended({ immunities, limited }) {
  const immunitiesToShow = (limited && immunities.length > 3) ? immunities.filter((immunity, index) => index < 3) : immunities
  return (
    <ListGroup className="immunities-list-extended">
      {immunitiesToShow.map(immunity => (
        <ListGroupItem key={immunity.name} className="immunity-item-extended">
          <ImmunityItemExtended name={immunity.name} valid={immunity.isValid} validFor={immunity.validFor}/>
        </ListGroupItem>
        ))}
    </ListGroup>
  );
}
