import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import React from "react";
import {Link} from "react-router-dom";
import {ValidityMark} from "../shared/validity-mark";

export function ImmunityItemExtended({ name, valid, validFor }) {
  return (
    <div className="immunities-list">
      <Link to={`/immunities-details/${name}`}>
        <Row>
          <Col xs={6} className="d-flex justify-content-start flex-column">
            <h3>{name}</h3>
            <div>
              <ValidityMark valid={valid} />
            </div>
          </Col>
          <Col xs={4} className="text-right pt-2">
            <div className="small">Valid until</div>
            <div className="font-weight-bolder">{valid ? validFor : "N/A"}</div>
          </Col>
          <Col xs={2} className="d-flex justify-content-end align-items-center">
            <svg width="10" height="20" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5.2 5.2L1 9.4" stroke="#212121" stroke-width="2.1" stroke-linejoin="round"/>
            </svg>
          </Col>
        </Row>
      </Link>
    </div>
  )
}
