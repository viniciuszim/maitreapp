import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Row, Col, Button } from 'react-bootstrap';

import Header from '../../components/Header';

import { Container, BoxContainer } from './style';

class Products extends Component {
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
  };

  componentDidMount() {
    const { location, getProductsRequest } = this.props;
    const { state } = location;
    const { sidebarSelected } = state;

    getProductsRequest(sidebarSelected.idgrupomenu);
  }

  handleMenuCall = (item) => {
    const { location, getProductsRequest, history } = this.props;
    const { state } = location;
    const { sidebarSelected } = state;

    if (item.possuisubnivel === 'true') {
      getProductsRequest(sidebarSelected.idgrupomenu, item.idcardapio);
      return;
    }

    // history.push('/');
    // history.push({
    //   pathname: '/template',
    //   search: '?query=abc',
    //   state: { detail: response.data }
    // })
    console.tron.log(`menu/${sidebarSelected.idgrupomenu}/cardapio/${item.idcardapio}/produtos`);
  };

  render() {
    const { location, products } = this.props;
    const { state } = location;
    const { sidebarSelected } = state;
    const { data } = products;

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
                              onClick={() => this.handleMenuCall(item)}
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
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
