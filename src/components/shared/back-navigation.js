import React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { withRouter }  from "react-router";

function BackNavigationUI({ history }) {
  const goBack = () => {
    history.goBack();
  }

  return (
    <Row className="py-4" onClick={goBack}>
      <Col xs={1}>
        <svg className="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
        </svg></Col>
      <Col xs={11}>Back</Col>
    </Row>
  )
}

export const BackNavigation = withRouter(BackNavigationUI);
