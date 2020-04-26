import { getImmunities } from "../../actions";
import { connect } from "react-redux";
import {Immunities} from "../../components/immunities/immunities";

const mapStateToProps = ({ immunities, user }) => ({
  immunities,
  user,
});

const mapDispatchToProps = {
  getImmunities,
}

export const ImmunitiesContainer = connect(mapStateToProps, mapDispatchToProps)(Immunities)
