import React from 'react';
import headerIcon from '../img/headerIcon.png';
import 'blaze';

function Header() {
  return (
    <div className="c-nav c-nav--inline">
      <i className="fa fa-bars fa-lg c-nav__item" aria-hidden="true" />
      <div className="c-nav__item--brand c-nav__item c-nav__content c-nav__logo" style={{ backgroundImage: `url(${headerIcon})` }} />
    </div>
  );
}

export default Header;
