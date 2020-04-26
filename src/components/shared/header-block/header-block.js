import Col from "reactstrap/es/Col";
import {InfoTooltip} from "../../shared/info-tooltip";
import Row from "reactstrap/lib/Row";
import React from "react";

import "./header-block.css";
import {BackNavigation} from "../back-navigation";

export function HeaderBlock({ title }) {
  return (
    <Row className="header-block">
      <Col xs={2}>
        <BackNavigation />
      </Col>
      <Col xs={8}>
        <h4>{title}</h4>
      </Col>
      <Col xs={2} >
        <div className="pt-1">
          <InfoTooltip />
        </div>
      </Col>
    </Row>
  )
}
