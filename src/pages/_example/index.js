import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';

import Header from '../../components/Header';

import { Container } from './style';

class Menu extends Component {
  static propTypes = {
    tables: PropTypes.shape({
      tableSelected: PropTypes.shape(),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Header title="Cardápio" />
        <Container>
          <h1>Cardápio</h1>
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
)(Menu);
