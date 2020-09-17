import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ThankYouPage from 'components/ThankYouPage/ThankYouPage';

/**
 * Provides state to the ThankYouPage component
 */
export default connect(({ userData }) => ({
  userData
}))(withRouter(ThankYouPage));
