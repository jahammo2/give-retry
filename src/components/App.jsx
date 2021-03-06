import React, { PropTypes } from 'react';

import Greeting from './Greeting';
import Header from './Header';
import NameTaker from './NameTaker';
import SignOut from '../../modules/authentication/containers/SignOut';

const propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  tokenInfo: PropTypes.object.isRequired
};

function App({ name, onSubmit, router, tokenInfo }) {
  return (
    <div>
      <Header />
      {Object.keys(tokenInfo).length > 0 &&
        <SignOut router={router} />}
      <Greeting name={name} />
      <NameTaker name={name} onSubmit={onSubmit} />
    </div>
  );
}

App.propTypes = propTypes;

export default App;
