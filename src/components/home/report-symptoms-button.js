import React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/lib/Button";

import "./report-symptoms-btn.css";

export function ReportSymptomsButton() {
  return (
    <Button className="px-5 w-100 mt-5 report-symptoms-btn">
      <Row>
        <Col xs={10} className="text-left">
          <div className="py-1 font-weight-bold">Feeling unwell?</div>
          <div className="py-1">Report your symptoms</div>
        </Col>
        <Col xs={2} className="d-flex align-items-center">
          <svg className="bi bi-arrow-right-short" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"
                  clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"/>
          </svg>
        </Col>
      </Row>
    </Button>
  )
}
