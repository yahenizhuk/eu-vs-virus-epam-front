import React, {useEffect, Fragment} from "react";
import Container from "reactstrap/lib/Container";
import {ImmunitiesListExtended} from "./immunities-list-extended";
import {AddImmunityFooter} from "./add-immunity-footer";
import {BackNavigation} from "../shared/back-navigation";

export function Immunities({ immunities, getImmunities, user }) {
  useEffect(() => {
    getImmunities(user.uuid);
  }, []);

  return (
    <Fragment>
      <Container>
        <BackNavigation />
        <h3>Certified immunity</h3>
        <p>Track infections and your immunity to them</p>
        <ImmunitiesListExtended immunities={immunities} />
      </Container>
      <AddImmunityFooter />
    </Fragment>
  )
}
