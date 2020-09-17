import React, { useEffect } from 'react';

import './ThankYouPage.scss';

const ThankYouPage = ({ userData }) => {
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="ui raised very padded text container segment thank-you-container">
      Thank you!
    </div>
  );
};

export default ThankYouPage;
