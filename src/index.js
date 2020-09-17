import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter, Route } from 'react-router-dom';
import Step1Container from 'containers/Step1Container';
import Step2Container from 'containers/Step2Container';
import ThankYouPageContainer from 'containers/ThankYouPageContainer';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="wrapper">
        <Route path="/step1" component={Step1Container} />
        <Route path="/step2" component={Step2Container} />
        <Route exact path="/thankyou" component={ThankYouPageContainer} />
        <Route exact path="/" component={Step1Container} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
