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
      showSidebar: PropTypes.bool,
    }).isRequired,
    getSidebarRequest: PropTypes.func.isRequired,
    selectSidebarRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getSidebarRequest } = this.props;
    getSidebarRequest();
  }

  handleLiClick = (index) => {
    document.getElementById(`li-${index}`).click();
  };

  handleSidebarCall = (item) => {
    const { selectSidebarRequest } = this.props;
    selectSidebarRequest(item);

    // history.push(`/sidebar/${item.idgrupomenu}/menu`);
  };

  render() {
    const { sidebar } = this.props;
    const { data, showSidebar, sidebarSelected } = sidebar;
    return (
      <div
        className={showSidebar ? 'positionSidebar d-block' : 'positionSidebar d-none d-sm-block'}
      >
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
                    <li key={index} onClick={() => this.handleLiClick(index)}>
                      <Link
                        id={`li-${index}`}
                        className={
                          sidebarSelected !== null
                          && sidebarSelected.idgrupomenu === item.idgrupomenu
                            ? 'active'
                            : ''
                        }
                        onClick={() => this.handleSidebarCall(item)}
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
      </div>
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
