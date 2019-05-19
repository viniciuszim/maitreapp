import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';
import { Creators as MenuActions } from '../../store/ducks/menu';

import { Row, Col, Button } from 'react-bootstrap';

import Header from '../../components/Header';

import { Container, BoxContainer } from './style';

class Menu extends Component {
  static propTypes = {
    sidebar: PropTypes.shape().isRequired,
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
    selectMenuRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { sidebar, getMenuRequest } = this.props;
    const { sidebarSelected } = sidebar;

    if (sidebarSelected !== null) {
      getMenuRequest(sidebarSelected.idgrupomenu);
    }
  }

  handleMenuCall = (item) => {
    const {
      sidebar, getMenuRequest, selectMenuRequest, history,
    } = this.props;
    const { sidebarSelected } = sidebar;

    if (item.possuisubnivel === 'true' && sidebarSelected !== null) {
      getMenuRequest(sidebarSelected.idgrupomenu, item.idcardapio);
      return;
    }

    selectMenuRequest(item);
    history.push(`/sidebar/${sidebarSelected.idgrupomenu}/menu/${item.idcardapio}/products`);
    // history.push({
    //   pathname: `/sidebar/${sidebarSelected.idgrupomenu}/menu/${item.idcardapio}/products`,
    //   state: { sidebarSelected, menuSelected: item },
    // });
  };

  render() {
    const { sidebar, menu } = this.props;
    const { sidebarSelected } = sidebar;
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
                    <Col
                      key={index}
                      md="6"
                      lg={index % 2 === 0 ? { span: 5, offset: 1 } : { span: 5, offset: 1 }}
                    >
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
                          {/* lg={{ span: 5, offset: 1 }} */}
                          <Col sm="6" className="text-right">
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
  sidebar: state.sidebar,
  menu: state.menu,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...SidebarActions,
    ...MenuActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
