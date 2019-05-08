import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';

import Header from '../../components/Header';

import { Container } from './style';

class Menu extends Component {
  static propTypes = {
    location: PropTypes.shape().isRequired,
    tables: PropTypes.shape({
      tableSelected: PropTypes.shape(),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {}

  render() {
    const { location } = this.props;
    const { state } = location;
    const { menuSelected } = state;

    return (
      <Fragment>
        {!!menuSelected && (
          <Fragment>
            <Header title={menuSelected.descricao} />
            <Container>
              <h1>{menuSelected.descricao}</h1>
            </Container>
          </Fragment>
        )}
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
)(Menu);
