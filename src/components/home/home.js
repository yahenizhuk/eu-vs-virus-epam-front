import React, { Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import Container from "reactstrap/lib/Container";
import {FooterNav} from "../shared/footer-nav";
import {Header} from "../shared/header/header";
import {ProofIdentityButton} from "./proof-identity-button/poof-identity-button";
import {Link} from "react-router-dom";
import {ImmunitiesListExtended} from "../immunities/immunities-list-extended";
import {HeaderBlockHome} from "./header-block-home/header-block-home";
import {CommonButton} from "../shared/common-button/common-button";

export function Home({ immunities, getImmunities, user }) {
  useEffect(() => {
    getImmunities(user.uuid);
  }, []);

  return (
    <Fragment>
      <Header>
        <Container className="text-center">
          <HeaderBlockHome />
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
      <div className="pt-5">
        <CommonButton>
          <div className="py-1 font-weight-bold">Feeling unwell?</div>
          <div className="py-1">Report your symptoms</div>
        </CommonButton>
      </div>
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
