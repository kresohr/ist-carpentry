import React from "react";
import PropTypes from "prop-types";
import { BodyContainer as Container } from "../../assets/styles/BodyStyle";

const BodyContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

BodyContainer.propTypes = {
  children: PropTypes.node,
};

export default BodyContainer;
