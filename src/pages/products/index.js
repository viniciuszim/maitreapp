import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';
import { Creators as MenuActions } from '../../store/ducks/menu';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Row, Col, Button } from 'react-bootstrap';

import Header from '../../components/Header';

import { Container, BoxContainer, ButtonsContainer } from './style';

class Products extends Component {
  static propTypes = {
    sidebar: PropTypes.shape().isRequired,
    menu: PropTypes.shape().isRequired,
    products: PropTypes.shape({
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
    getProductsRequest: PropTypes.func.isRequired,
    selectProductRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { sidebar, menu, getProductsRequest } = this.props;
    const { sidebarSelected } = sidebar;
    const { menuSelected } = menu;

    if (sidebarSelected !== null) {
      getProductsRequest(sidebarSelected.idgrupomenu, menuSelected.idcardapio);
    }
  }

  handleProductCall = (item) => {
    const { sidebar, menu, selectProductRequest, history } = this.props;
    const { sidebarSelected } = sidebar;
    const { menuSelected } = menu;

    selectProductRequest(item);
    history.push(`/sidebar/${sidebarSelected.idgrupomenu}/menu/${menuSelected.idcardapio}/products/${item.idproduto}`);
  };

  handleOrderCall = (item) => {
    console.tron.log('handleOrderCall');
  }

  render() {
    const { sidebar, menu, products } = this.props;
    const { sidebarSelected } = sidebar;
    const { menuSelected } = menu;
    const { data } = products;

    return (
      <Fragment>
        {!!sidebarSelected && !!menuSelected && (
          <Fragment>
            <Header title={sidebarSelected.descricao} />
            <Container>
              <Row>
                <Col>
                  <h2>{menuSelected.descricao}</h2>
                </Col>
              </Row>
              {!!data
                && [...data].map((item, index) => (
                  <BoxContainer key={index}>
                    <Row>
                      <Col md="3">
                        <img src={`data:image/jpeg;base64,${item.foto}`} alt={item.descricao} />
                      </Col>
                      <Col md="6" className="pt-sm-2 pt-md-3 text-left">
                        <Row>
                          <Col>
                            <h3>{item.descricao}</h3>
                          </Col>
                        </Row>
                        <Row className="mb-1">
                          <Col sm="6" className="text-xs-center text-sm-left">
                            <span className="infos">
                              <i className="far fa-clock" />
                              Preparo:{' '}
                              {item.tempopreparo}
                            </span>
                          </Col>
                          <Col sm="6" className="text-xs-center text-sm-right">
                            <span className="infos">
                              <i className={item.quantidadepessoas > 1 ? 'fas fa-users' : 'fas fa-user'} />
                              Serve:
                              {' '}
                              {item.quantidadepessoas}
                              {' '}
                              {item.quantidadepessoas > 1 ? 'pessoas' : 'pessoa'}
                            </span>
                          </Col>
                        </Row>
                        <Row className="mb-1">
                          <Col>
                            <span className="detalhes">{item.descricao}</span>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="3">
                        <ButtonsContainer>
                          <Button
                            type="button"
                            variant=""
                            className="flex button redButton mb-sm-1"
                            onClick={() => this.handleProductCall(item)}
                          >
                            DETALHES
                          </Button>
                          <Button
                            block
                            type="button"
                            size="md"
                            variant=""
                            className="flex button greenButton"
                            onClick={() => this.handleOrderCall(item)}
                          >
                            PEDIR
                          </Button>
                        </ButtonsContainer>
                      </Col>
                    </Row>
                  </BoxContainer>
                ))}
            </Container>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
  menu: state.menu,
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...SidebarActions,
    ...MenuActions,
    ...ProductsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
