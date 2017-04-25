import React, { PropTypes } from 'react';
import {
  Link
} from 'react-router';

import Header from '../Header';
import Modal from '../Modal';
import RegisterModule from '../../../modules/authentication/containers/Register';
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

function Register({ location, router }) {
  return (
    <div>
      <Header />
      <Modal>
        <header className="c-card__header">
          <Link to="/register" className="c-button c-button--close u-super">×</Link>
          <h2 className="c-heading c-authentication-heading">sign up</h2>
        </header>
        <div className="c-card__body">
          <h5 className="c-heading">sign up with email</h5>
          <RegisterModule location={location} router={router}>
            <div className="form-field">
              <div className="form-field__title">Username</div>
              <input name="user_name" type="text" />
            </div>
          </RegisterModule>
        </div>
      </Modal>
    </div>
  );
}

Register.propTypes = propTypes;

export default Register;
