import { connect } from "react-redux";
import {Verification} from "../components/verification/verification";

const mapStateToProps = ({ user }) => ({
  user,
});

export const VerificationContainer = connect(mapStateToProps)(Verification)
