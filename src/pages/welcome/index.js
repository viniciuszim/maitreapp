import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';

import Header from '../../components/Header';

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
              <OrderContainer>
                <NoOrderContainer>
                  <h1>Nenhum item solicitado.</h1>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(TablesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
