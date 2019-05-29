import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';
import { Creators as MenuActions } from '../../store/ducks/menu';
import { Creators as ProductsActions } from '../../store/ducks/products';

import Header from '../../components/Header';

import { Row, Col, Button } from 'react-bootstrap';

import {
  Container,
  ProductContainer,
  ProductInfoContainer,
  ProductDetailsContainer,
  SideDishContainer,
  SeeMoreContainer,
} from './style';

class ProductDetails extends Component {
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
  };

  componentDidMount() {}

  handleOrderCall = (item) => {
    console.tron.log('handleOrderCall');
  };

  render() {
    const { sidebar, menu, products } = this.props;
    const { sidebarSelected } = sidebar;
    const { menuSelected } = menu;
    const { productSelected } = products;

    return (
      <Fragment>
        {!!sidebarSelected && !!menuSelected && (
          <Fragment>
            <Header title={sidebarSelected.descricao} />
            <Container>
              <ProductContainer>
                <Row>
                  <Col md="4">
                    <img
                      src={`data:image/jpeg;base64,${productSelected.foto}`}
                      alt={productSelected.descricao}
                    />
                  </Col>
                  <Col md="8">
                    <ProductInfoContainer className="pl-md-4">
                      <ProductDetailsContainer>
                        <Row>
                          <Col className="p-0 mt-xs-2">
                            <h3>{productSelected.descricao}</h3>
                          </Col>
                        </Row>
                        <Row className="mb-1">
                          <Col xs="6" className="text-xs-center text-sm-left p-0">
                            <span className="infos">
                              <i className="far fa-clock" />
                              Preparo:
                              {' '}
                              {productSelected.tempopreparo}
                            </span>
                          </Col>
                          <Col xs="6" className="text-xs-center text-sm-right p-0">
                            <span className="infos">
                              <i
                                className={
                                  productSelected.quantidadepessoas > 1
                                    ? 'fas fa-users'
                                    : 'fas fa-user'
                                }
                              />
                              Serve:
                              {' '}
                              {productSelected.quantidadepessoas}
                              {' '}
                              {productSelected.quantidadepessoas > 1 ? 'pessoas' : 'pessoa'}
                            </span>
                          </Col>
                        </Row>
                        <Row className="mb-1">
                          <Col>
                            <span className="detalhes">{productSelected.descricao}</span>
                          </Col>
                        </Row>
                      </ProductDetailsContainer>
                      <SideDishContainer>
                        <Row className="flex">
                          <Col sm="6" className="p-0 text-left mt-sm-4">
                            <h6>ACOMPANHAMENTOS:</h6>
                            - Salada especial
                            <br />
                            - Arroz branco ou Integral
                            <br />
                            - Legumes no vapor
                            <br />
                            - Azeite
                            <br />
                          </Col>
                          <Col
                            sm="6"
                            lg={{ span: 3, offset: 3 }}
                            className="p-0 orderCurrency text-right"
                          >
                            <span className="orderCurrencylabel">
                              R$&nbsp;
                              <span className="orderCurrencyValue">39,90</span>
                            </span>
                            <Button
                              block
                              type="button"
                              size="md"
                              variant=""
                              className="button greenButton"
                              onClick={() => this.handleOrderCall(productSelected)}
                            >
                              PEDIR
                            </Button>
                          </Col>
                        </Row>
                      </SideDishContainer>
                    </ProductInfoContainer>
                  </Col>
                </Row>
              </ProductContainer>
              <SeeMoreContainer>
                <Row>
                  <Col md="6">{/* <h1>Veja mais 1</h1> */}</Col>
                  <Col md="6">{/* <h1>Veja mais 2</h1> */}</Col>
                </Row>
              </SeeMoreContainer>
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
)(ProductDetails);
