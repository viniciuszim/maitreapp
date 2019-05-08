import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MenuActions } from '../../store/ducks/menu';

import {
  Container, MainLogo, ClientLogo, Nav,
} from './style';

import Logo from '../../assets/images/maitre-logo.png';

class Sidebar extends Component {
  static propTypes = {
    itemsMenu: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          descricao: PropTypes.string,
          iconfontawesome: PropTypes.string,
          idgrupomenu: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
    getMenuRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getMenuRequest } = this.props;
    getMenuRequest();
  }

  render() {
    const { itemsMenu } = this.props;
    const { data, loading, error } = itemsMenu;
    return (
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
              {!!data
                && [...data].map((menu, index) => (
                  <li key={index}>
                    <Link
                      to={{
                        pathname: `/menu/${menu.idgrupomenu}/cardapio`,
                        state: {
                          menuSelected: menu,
                        },
                      }}
                    >
                      <i className={menu.iconfontawesome} />
                      {menu.descricao}
                    </Link>
                  </li>
                ))}
            </Nav>
          </div>
        </div>
        <div>
          <h5>Cadastre-se</h5>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  itemsMenu: state.itemsMenu,
});

const mapDispatchToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
