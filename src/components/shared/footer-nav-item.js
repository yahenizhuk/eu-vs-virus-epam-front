import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import classNames from "classnames";

export function FooterNavItem({children, active, to}) {
  return (
    <Link to={to}>
      <div className={classNames('nav-icon', 'py-3', 'px-3', { active })}>
        {children}
      </div>
    </Link>
  )
}

FooterNavItem.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

FooterNavItem.defaultProps = {
  active: false,
};
