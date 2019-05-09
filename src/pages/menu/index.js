import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MenuActions } from '../../store/ducks/menu';

import Header from '../../components/Header';

import { Container, BoxContainer } from './style';

class Menu extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        menuSelected: PropTypes.shape({
          descricao: PropTypes.string,
          iconfontawesome: PropTypes.string,
          idgrupomenu: PropTypes.string,
        }),
      }),
    }).isRequired,
    tables: PropTypes.shape({
      tableSelected: PropTypes.shape(),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
    getMenuRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { location, getMenuRequest } = this.props;
    const { state } = location;
    const { menuSelected } = state;

    getMenuRequest(menuSelected.idgrupomenu);
  }

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
              <BoxContainer>dfafads</BoxContainer>
              <BoxContainer />
              <BoxContainer />
              <BoxContainer />
            </Container>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
});

const mapDispatchToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
