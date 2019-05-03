import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Header = ({ title }) => (
  <Container>
    <span>|</span>
    <h1>{title}</h1>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
