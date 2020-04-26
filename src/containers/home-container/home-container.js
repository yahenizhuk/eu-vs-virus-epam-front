import React from "react";
import { Home } from "../../components/home/home";
import { getImmunities } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = ({ immunities, user }) => ({
  immunities,
  user,
});

const mapDispatchToProps = {
  getImmunities,
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

