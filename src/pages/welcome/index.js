import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';

import Header from '../../components/Header';

import {
  Container, TableSelected, ButtonsContainer, OrderContainer,
} from './style';

class Welcome extends Component {
  static propTypes = {
    tables: PropTypes.shape({
      tableSelected: PropTypes.oneOfType([null, PropTypes.shape()]),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  componentDidUpdate() {}

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
                <Button
                  variant="contained"
                  color="primary"
                  className="button greenButton"
                  onClick={() => this.handleFollowOrders()}
                >
                  <i className="fas fa-plus-circle" />
                  ACOMPANHE SEU PEDIDO
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="button greenButton"
                  onClick={() => this.handleFollowBills()}
                >
                  <i className="fas fa-dollar-sign" />
                  ACOMPANHE SUA CONTA
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="button redButton"
                  onClick={() => this.handleCancelOrders()}
                >
                  <i className="fas fa-minus-circle" />
                  CANCELAR
                </Button>
              </ButtonsContainer>
              <OrderContainer />
            </Fragment>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tables: state.tables,
});

const mapDispatchToProps = dispatch => bindActionCreators(TablesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
