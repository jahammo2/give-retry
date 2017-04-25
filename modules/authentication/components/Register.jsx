import React, {
  Component,
  PropTypes
} from 'react';

const propTypes = {
  actions: PropTypes.shape({
    authentication: PropTypes.shape({
      register: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  children: PropTypes.node,
  location: PropTypes.shape({
    query: PropTypes.shape({
      next: PropTypes.string
    }).isRequired
  }).isRequired,
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired
  })
};

class Register extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const values = Array.prototype.reduce.call(this.registerForm.elements, (memo, element) => {
      if (element.name && element.value) {
        memo[element.name] = element.value;
      }

      return memo;
    }, {});
    const params = {
      data: {
        attributes: values
      },
      confirm_success_url: `${window.location.origin}/registration-confirmed`
    };

    return this.props.actions.authentication
      .register(params)
      .then(() => this.transitionToNextPage());
  }

  transitionToNextPage() {
    const query = { ...this.props.location.query };

    if (query.next) {
      delete query.next;
    }

    this.props.router.replace({
      query,
      pathname: this.props.location.query.next || '/'
    });
  }

  render() {
    return (
      <form ref={(form) => { this.registerForm = form; }} onSubmit={this.handleSubmit}>
        <div className="form-field">
          <div className="form-field__title">Email</div>
          <input name="email" type="text" />
        </div>
        <div className="form-field">
          <div className="form-field__title">Password</div>
          <input name="password" type="password" />
        </div>
        {this.props.children}
        <div className="c-button__container">
          <input className="c-button c-button--rounded c-button--brand u-bg-teal" type="submit" value="SUBMIT" />
        </div>
      </form>
    );
  }
}

Register.propTypes = propTypes;

export default Register;
