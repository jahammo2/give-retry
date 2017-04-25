import React, {
  PropTypes
} from 'react';
import 'blaze';

const propTypes = {
  children: PropTypes.node
};

function Modal({ children }) {
  return (
    <div>
      <div className="c-overlay" />
      <div className="o-modal u-highest">
        <div className="c-card">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;
