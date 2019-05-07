import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Container, LeftSide, RightSide } from './styles';

const Header = ({ title }) => (
  <Container>
    <LeftSide>
      <span>|</span>
      <h1>{title}</h1>
    </LeftSide>
    <RightSide>
      <Link to="/configuracoes">
        <i className="fa fa-gear" />
      </Link>
    </RightSide>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
