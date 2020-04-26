import { connect } from "react-redux";
import {ImmunityDetails} from "../components/immunity-details/immunity-details";
import { getDiseaseInfo } from "../actions/get-desease-info";
import { getImmunityDetails } from "../actions/get-immunity-details";

const mapStateToProps = ({ immunityDetails, diseaseInfo, user }) => ({
  immunityDetails,
  diseaseInfo,
  user,
});

const mapDispatchToProps = {
  getImmunityDetails,
  getDiseaseInfo,
}

export const ImmunityDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ImmunityDetails)
