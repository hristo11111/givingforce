import React from 'react';

import './CTASection.scss';

const CTASection = ({ onBackBtnClick }) => {
  return (
    <div className='cta'>
      <input type="submit" value="Submit" className="ui button primary" />
      {onBackBtnClick && <input type="button" value="Back" className="ui button grey" onClick={onBackBtnClick} />}
    </div>
  );
};

export default CTASection;
