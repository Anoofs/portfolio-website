import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import './Page.css'

function Page({ children, color, background, location: { state } }) {
  const cx = classNames({
    page: true,
    "page--prev": state && state.prev
  });
  console.log("Page state " + state);
  console.log("Page children" + children);
  return (
    <section
      className={cx}
      style={{

      }}
    >
      <div className="page__inner">{children}</div>
    </section>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  background: PropTypes.string
};

Page.defaultProps = {
  color: "#fff",
  background: "#223"
};

export default withRouter(Page);
