import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UserData } from 'interfaces';
import Step2 from 'components/UserData/Step2';
import { setUserData } from 'store/actions';

type Props = {
  userData: UserData
}

/**
 * Provides state and actions to the Step1 component
 */
export default connect(({ userData }: Props) => ({
  userData,
}), (dispatch) => ({
  setUserData: (data: UserData) => dispatch(setUserData(data))
}))(withRouter(Step2));
