import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Title({ children }) {
  return <Container>{children}</Container>;
}

Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: 'React-Seed',
};
