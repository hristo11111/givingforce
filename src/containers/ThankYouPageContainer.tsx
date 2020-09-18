import { connect } from 'react-redux';
import { UserData } from 'interfaces';
import ThankYouPage from 'components/ThankYouPage/ThankYouPage';

type Props = {
  userData: UserData
}

/**
 * Provides state to the ThankYouPage component
 */
export default connect(({ userData }: Props) => ({
  userData
}))(ThankYouPage);
