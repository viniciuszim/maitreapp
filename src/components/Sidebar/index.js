import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container, MainLogo, ClientLogo, Nav,
} from './style';

import Logo from '../../assets/images/maitre-logo.png';

const Sidebar = () => (
  <Container>
    <div>
      <MainLogo>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </MainLogo>
      <ClientLogo>
        <h3>LOGO CLIENTE</h3>
      </ClientLogo>
      <div>
        <Nav>
          <li>
            <Link to="/">
              <i className="fas fa-utensils" />
              CARDÁPIO
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-glass" />
              BEBIDAS
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-wine-bottle" />
              CARTA DE VINHOS
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-ice-cream" />
              SOBREMESAS
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-handshake-o" />
              POLÍTICA DA CASA
            </Link>
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
