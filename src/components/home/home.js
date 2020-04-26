import React, { Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import Jumbotron from "reactstrap/lib/Jumbotron";
import Container from "reactstrap/lib/Container";
import { Qrcode } from "./qrcode";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/es/Col";
import { InfoTooltip } from "../shared/info-tooltip";
import { ImmunitiesList } from "./immunities-list";
import { ReportSymptomsButton } from "./report-symptoms-button";
import {FooterNav} from "../shared/footer-nav";
import {Header} from "../shared/header/header";
import {HeaderBlock} from "./header-block/header-block";
import Button from "reactstrap/lib/Button";
import {ProofIdentityButton} from "./proof-identity-button/poof-identity-button";
import {Link} from "react-router-dom";
import {ImmunitiesListExtended} from "../immunities/immunities-list-extended";

export function Home({ immunities, getImmunities, user }) {
  useEffect(() => {
    getImmunities(user.uuid);
  }, []);

  return (
    <Fragment>
      <Header>
        <Container className="text-center">
          <HeaderBlock />
        </Container>
      </Header>
      <Container className="position-relative">
        <ProofIdentityButton />
      </Container>
      <Container>
        <p className="small text-dark pt-3">
          Generate a secure, unique code to show your medical professionals when receiving a vaccine, or to border agents when travelling to verify this passport.
        </p>
      </Container>
      <Container>
        <div className="d-flex justify-content-between py-3">
          <h4>Certified immunity</h4>
          <Link to="/immunities">View all ></Link>
        </div>
        {(immunities && immunities.length > 0) && (
          <ImmunitiesListExtended immunities={immunities} limited={immunities.length > 3}/>
        )}
      </Container>
      <ReportSymptomsButton />
      <FooterNav />
    </Fragment>
  )
}

Home.propTypes = {
  immunities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    validFor: PropTypes.string,
  }))
};

Home.defaultProps = {
  immunities: [],
};
