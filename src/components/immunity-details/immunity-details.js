import React, {useEffect, Fragment} from "react";
import Container from "reactstrap/lib/Container";
import {BackNavigation} from "../shared/back-navigation";
import {withRouter} from "react-router";

function ImmunityDetailsUI({ getImmunityDetails, user, match }) {
  const { type } = match.params;
  useEffect(() => {
    getImmunityDetails(user.uuid, match.params.type);
  }, []);

  return (
    <Fragment>
      <Container>
        <BackNavigation />
        <h3>{type}</h3>
        <p>Your immunity sunnary.</p>
      </Container>
    </Fragment>
  )
}

export const ImmunityDetails = withRouter(ImmunityDetailsUI)
