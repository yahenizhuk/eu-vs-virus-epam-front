import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import React from "react";
import {Link} from "react-router-dom";

function ValidityMark({ valid }) {
  return valid ? (
      <div>
        <div className="mr-1 d-inline-block">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 12.6C9.77939 12.6 12.6 9.77939 12.6 6.3C12.6 2.82061 9.77939 0 6.3 0C2.82061 0 0 2.82061 0 6.3C0 9.77939 2.82061 12.6 6.3 12.6Z" fill="#7DCE63"/>
            <path d="M8.64771 5.28198L5.18823 8.25952L3.52319 6.3" stroke="white" stroke-width="1.2" stroke-linejoin="round"/>
          </svg>
        </div>
        <p className="d-inline-block">Immunity></p>
      </div>
    ) : (
      <div>
        <div className="mr-1 d-inline-block">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 12.6C9.77939 12.6 12.6 9.77939 12.6 6.3C12.6 2.82061 9.77939 0 6.3 0C2.82061 0 0 2.82061 0 6.3C0 9.77939 2.82061 12.6 6.3 12.6Z" fill="#EB6652"/>
            <path d="M3.9126 3.93079L8.7126 8.73079" stroke="white" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M8.71265 3.93079L3.91265 8.73079" stroke="white" stroke-width="1.2" stroke-linejoin="round"/>
          </svg>
        </div>
        <p className="d-inline-block">No immunity</p>
      </div>
    );
}

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
            <div className="font-weight-bolder">{validFor}</div>
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
