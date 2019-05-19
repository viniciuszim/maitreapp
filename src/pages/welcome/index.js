import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';

import Header from '../../components/Header';

import { Row, Col, Button } from 'react-bootstrap';

import {
  Container,
  TableSelected,
  ButtonsContainer,
  OrderContainer,
  NoOrderContainer,
} from './style';

class Welcome extends Component {
  static propTypes = {
    tables: PropTypes.shape({
      tableSelected: PropTypes.shape(),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
    selectSidebarRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { selectSidebarRequest } = this.props;
    selectSidebarRequest(null);
  }

  handleFollowOrders = () => {};

  handleFollowBills = () => {};

  handleCancelOrders = () => {};

  render() {
    const { tables } = this.props;
    const { tableSelected } = tables;
    return (
      <Fragment>
        <Header title="Principal" />
        <Container>
          <TableSelected>
            {!tableSelected ? <h2>Selecione uma mesa!</h2> : <h2>{tableSelected.name}</h2>}
          </TableSelected>
          {!!tableSelected && (
            <Fragment>
              <ButtonsContainer>
                <Row>
                  <Col lg="4">
                    <Button
                      type="button"
                      block
                      size="lg"
                      variant=""
                      className="button greenButton"
                      onClick={() => this.handleFollowOrders()}
                    >
                      <i className="fas fa-plus-circle" />
                      ACOMPANHE SEU PEDIDO
                    </Button>
                  </Col>
                  <Col lg="4">
                    <Button
                      type="button"
                      block
                      size="lg"
                      variant=""
                      className="button greenButton"
                      onClick={() => this.handleFollowBills()}
                    >
                      <i className="fas fa-dollar-sign" />
                      ACOMPANHE SUA CONTA
                    </Button>
                  </Col>
                  <Col lg="4">
                    <Button
                      type="button"
                      block
                      size="lg"
                      variant=""
                      className="button redButton"
                      onClick={() => this.handleCancelOrders()}
                    >
                      <i className="fas fa-minus-circle" />
                      CANCELAR
                    </Button>
                  </Col>
                </Row>
              </ButtonsContainer>
              <OrderContainer>
                <NoOrderContainer>
                  <Row>
                    <Col>
                      <h1>Nenhum item solicitado.</h1>
                    </Col>
                  </Row>
                </NoOrderContainer>
              </OrderContainer>
            </Fragment>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tables: state.tables,
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...TablesActions,
    ...SidebarActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
