import React from 'react';

import {
  Container, MainLogo, ClientLogo, Nav,
} from './style';

const Sidebar = () => (
  <Container>
    <div>
      <MainLogo>
        <h5>Logo 01</h5>
      </MainLogo>
      <ClientLogo>
        <h5>Logo 02</h5>
      </ClientLogo>
      <div>
        <Nav>
          <li>
            <a href="">CARDÁPIO</a>
          </li>
          <li>
            <a href="">BEBIDAS</a>
          </li>
          <li>
            <a href="">CARTA DE VINHOS</a>
          </li>
          <li>
            <a href="">SOBREMESAS</a>
          </li>
          <li>
            <a href="">POLÍTICA DA CASA</a>
          </li>
        </Nav>
      </div>
    </div>
    <div>
      <h5>Cadastre-se</h5>
    </div>
  </Container>
);

export default Sidebar;
