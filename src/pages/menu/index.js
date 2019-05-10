import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MenuActions } from '../../store/ducks/menu';

import { Row, Col, Button } from 'react-bootstrap';

import Header from '../../components/Header';

import { Container, BoxContainer } from './style';

class Menu extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        sidebarSelected: PropTypes.shape({
          descricao: PropTypes.string,
          iconfontawesome: PropTypes.string,
          idgrupomenu: PropTypes.string,
        }),
      }),
    }).isRequired,
    menu: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          idcardapio: PropTypes.string,
          idgrupomenu: PropTypes.string,
          possuisubnivel: PropTypes.string,
          descricao: PropTypes.string,
          destaque: PropTypes.string,
          foto: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
    getMenuRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { location, getMenuRequest } = this.props;
    const { state } = location;
    const { sidebarSelected } = state;

    getMenuRequest(sidebarSelected.idgrupomenu);
  }

  handleMenuLevel = (item) => {
    const { location, history } = this.props;
    const { state } = location;
    const { sidebarSelected } = state;

    // possuisubnivel
    // history.push('/');
    // history.push({
    //   pathname: '/template',
    //   search: '?query=abc',
    //   state: { detail: response.data }
    // })
    console.tron.log(`menu/${sidebarSelected.idgrupomenu}/cardapio/${item.idcardapio}/nivel`);
  };

  render() {
    const { location, menu } = this.props;
    const { state } = location;
    const { sidebarSelected } = state;
    const { data } = menu;

    return (
      <Fragment>
        {!!sidebarSelected && (
          <Fragment>
            <Header title={sidebarSelected.descricao} />
            <Container>
              <Row>
                {!!data
                  && [...data].map((item, index) => (
                    <Col key={index} lg="6">
                      <BoxContainer>
                        <Row className="flex">
                          <Col>
                            <img src={`data:image/jpeg;base64,${item.foto}`} alt={item.descricao} />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6" className="text-left">
                            <h2>{item.descricao}</h2>
                          </Col>
                          <Col sm="6" lg={{ span: 5, offset: 1 }} className="text-right">
                            <Button
                              block
                              type="button"
                              size="md"
                              variant=""
                              className="button greenButton"
                              onClick={() => this.handleMenuLevel(item)}
                            >
                              <i className="fas fa-plus-circle" />
                              VER OPÇÕES
                            </Button>
                          </Col>
                        </Row>
                      </BoxContainer>
                    </Col>
                  ))}
              </Row>
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
