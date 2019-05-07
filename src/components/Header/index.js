import React from 'react';
import PropTypes from 'prop-types';

import { Container, LeftSide, RightSide } from './styles';

const Header = ({ title }) => (
  <Container>
    <LeftSide>
      <span>|</span>
      <h1>{title}</h1>
    </LeftSide>
    <RightSide>
      <a href="configuracoes">
        <i className="fa fa-gear" />
      </a>
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
