import React, { useEffect } from 'react';

const ThankYouPage = ({ userData }) => {
  useEffect(() => {
    console.log(userData)
  }, [userData]);

  return (
    <div>
      Thank you!
    </div>
  );
};

export default ThankYouPage;
