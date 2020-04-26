import React, {useEffect, Fragment} from "react";
import Container from "reactstrap/lib/Container";
import {ImmunitiesListExtended} from "./immunities-list-extended";
import {AddImmunityFooter} from "./add-immunity-footer";
import {Header} from "../shared/header/header";
import {HeaderBlock} from "../shared/header-block/header-block";
import {Sorting} from "./sorting/sorting";

import "./immunities.css";

export function Immunities({ immunities, getImmunities, user }) {
  useEffect(() => {
    getImmunities(user.uuid);
  }, []);

  return (
    <div className="immunities-page">
      <Header>
        <Container className="text-center">
          <HeaderBlock title="Certified immunity" />
          <p className="w-75 pt-1 text-left">Track infections and your immunity to them.</p>
          <Sorting />
        </Container>
      </Header>
      <Container className="position-relative">
        <ImmunitiesListExtended immunities={immunities} className="position-absolute w-100"/>
      </Container>
      <AddImmunityFooter />
    </div>
  )
}
