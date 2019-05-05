import React from 'react';

import {
  Container, MainLogo, ClientLogo, Nav,
} from './style';

import Logo from '../../assets/images/maitre-logo.png';

const Sidebar = () => (
  <Container>
    <div>
      <MainLogo>
        <img src={Logo} alt="Logo" />
      </MainLogo>
      <ClientLogo>
        <h3>LOGO CLIENTE</h3>
      </ClientLogo>
      <div>
        <Nav>
          <li>
            <a href="">
              <i className="fas fa-utensils" />
              CARDÁPIO
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-glass" />
              BEBIDAS
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-wine-bottle" />
              CARTA DE VINHOS
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-ice-cream" />
              SOBREMESAS
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-handshake-o" />
              POLÍTICA DA CASA
            </a>
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
