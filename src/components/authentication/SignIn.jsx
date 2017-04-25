import React, { PropTypes } from 'react';
import {
  Link
} from 'react-router';

import Header from '../Header';
import Modal from '../Modal';
import SignInModule from '../../../modules/authentication/containers/SignIn';
import 'blaze';

const propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      next: PropTypes.string
    }).isRequired
  }).isRequired,
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired
  })
};

function SignIn({ location, router }) {
  return (
    <div>
      <Header />
      <Modal>
        <header className="c-card__header">
          <Link to="/register" className="c-button c-button--close">×</Link>
          <h2 className="c-heading">Sign In</h2>
        </header>
        <div className="c-card__body">
          <SignInModule location={location} router={router} />
        </div>
      </Modal>
    </div>
  );
}

SignIn.propTypes = propTypes;

export default SignIn;
