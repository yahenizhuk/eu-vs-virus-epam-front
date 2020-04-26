import { connect } from "react-redux";
import {ImmunityDetails} from "../components/immunity-details/immunity-details";
import { getImmunityDetails } from "../actions/get-immunity-details";

const mapStateToProps = ({ immunityDetails, user }) => ({
  immunityDetails,
  user,
});

const mapDispatchToProps = {
  getImmunityDetails,
}

export const ImmunityDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ImmunityDetails)
