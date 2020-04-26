import React, {useEffect} from "react";
import Container from "reactstrap/lib/Container";
import {withRouter} from "react-router";
import {Header} from "../shared/header/header";
import {HeaderBlock} from "../shared/header-block/header-block";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import ListGroup from "reactstrap/lib/ListGroup";
import {ValidityMark} from "../shared/validity-mark";
import {CommonButton} from "../shared/common-button/common-button";

import "./immunity-details.css";

function ImmunityDetailsUI({ getImmunityDetails, user, match, getDiseaseInfo, diseaseInfo, immunityDetails }) {
  const { type } = match.params;

  useEffect(() => {
    getImmunityDetails(user.uuid, type);
    getDiseaseInfo(type);
  }, []);

  return (
    <div className="immunities-page">
      <Header>
        <Container className="text-center">
          <HeaderBlock title={type} />
          <p className="w-75 pt-1 text-left">Your immunity summary.</p>
        </Container>
      </Header>
      <Container className="position-relative">
        <ListGroup className="immunities-page-card position-absolute">
          <ListGroupItem className="immunities-page-card-item">
            <div className="font-weight-bold">Immunity</div>
            <ValidityMark valid={immunityDetails.tested} />

            <div className="font-weight-bold">Vaccination</div>
            <div>{immunityDetails.certDate || "N/A"}</div>


            <div className="font-weight-bold pt-3">Tested</div>
            <div className="d-flex">
              <div>N/A</div>
              <div className="link pl-2">Find a test ></div>
            </div>

            <div className="pt-3">Experiencing {immunityDetails.immuneType} symptoms?</div>
            <div className="py-2">
              <CommonButton>
                <div className="py-1 font-weight-bold">Record your symptoms</div>
              </CommonButton>
            </div>
          </ListGroupItem>
          <ListGroupItem className="immunities-page-card-item">
            <div className="font-weight-bold">Information</div>
            <p className="pt-3">Coronavirus (COVID-19) is an infectious disease caused by severe acute respiratory syndrome. The disease was first identified in December 2019 in Wuhan, the capital of China’s Hubei province, and has since spread globally.</p>
          </ListGroupItem>
        </ListGroup>
      </Container>
      {/*<AddImmunityFooter />*/}
    </div>
  )
}

export const ImmunityDetails = withRouter(ImmunityDetailsUI)
