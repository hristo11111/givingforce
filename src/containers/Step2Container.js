import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Step2 from 'components/UserData/Step2';
import { setUserData } from 'store/actions';

/**
 * Provides state and actions to the Step1 component
 */
export default connect(({ userData }) => ({
  userData,
}), (dispatch) => ({
  setUserData: (data) => dispatch(setUserData(data))
}))(withRouter(Step2));
