import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';

import {
  Container, MainLogo, ClientLogo, Nav,
} from './style';

import Logo from '../../assets/images/maitre-logo.png';

class Sidebar extends Component {
  static propTypes = {
    sidebar: PropTypes.shape({
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
    getSidebarRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getSidebarRequest } = this.props;
    getSidebarRequest();
  }

  render() {
    const { sidebar } = this.props;
    const { data, loading, error } = sidebar;
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
                && [...data].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={{
                        pathname: `/sidebar/${item.idgrupomenu}/menu`,
                        state: {
                          sidebarSelected: item,
                        },
                      }}
                    >
                      <i className={item.iconfontawesome} />
                      {item.descricao}
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
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => bindActionCreators(SidebarActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
