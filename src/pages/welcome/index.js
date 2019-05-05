import React, { Fragment } from 'react';

import Header from '../../components/Header';

import {
  Container, TableSelected, ButtonsContainer, OrderContainer,
} from './style';

const Welcome = () => (
  <Fragment>
    <Header title="Principal" />
    <Container>
      <TableSelected>
        {/* <h2>Selecione uma mesa!</h2> */}
        <h2>Mesa 18</h2>
      </TableSelected>
      <ButtonsContainer>
        <button type="button" className="greenButton">
          <i className="fas fa-plus-circle" />
          ACOMPANHE SEU PEDIDO
        </button>
        <button type="button" className="greenButton">
          <i className="fas fa-dollar-sign" />
          ACOMPANHE SUA CONTA
        </button>
        <button type="button" className="redButton">
          <i className="fas fa-minus-circle" />
          CANCELAR
        </button>
      </ButtonsContainer>
      <OrderContainer />
    </Container>
  </Fragment>
);

export default Welcome;
