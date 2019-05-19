import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';

import Loader from 'react-loader-spinner';

import {
  Form, Row, Col, Button, Alert,
} from 'react-bootstrap';

import Header from '../../components/Header';

import { Content, LoadingContainer } from '../../styles/components';
import { Container } from './style';

class Settings extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    tables: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
    getAllTablesRequest: PropTypes.func.isRequired,
    selectTableRequest: PropTypes.func.isRequired,
    selectSidebarRequest: PropTypes.func.isRequired,
  };

  state = {
    validatedForm1: false,
    validatedForm2: false,
    connectionTested: false,
    host: 'http://localhost',
    port: '3001',
    tableSelected: {
      id: 0,
    },
  };

  componentDidMount() {
    const { tables, selectSidebarRequest } = this.props;
    const { data, tableSelected } = tables;
    if (
      data !== null
      && typeof data !== 'undefined'
      && tableSelected !== null
      && typeof tableSelected !== 'undefined'
    ) {
      // this.setState({ connectionTested: true, tableSelected });
      this.setState({ tableSelected });
    }
    selectSidebarRequest(null);
  }

  componentWillReceiveProps(nextProps) {
    const { tables } = nextProps;
    const { tableSelected } = tables;
    if (tableSelected !== null && typeof tableSelected !== 'undefined') {
      const { history } = this.props;
      history.push('/');
    }
  }

  handleHostAndPortValidation(event) {
    this.setState({ validatedForm1: true });
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    this.handleTestConnect();
  }

  handleTestConnect = () => {
    const { host, port } = this.state;
    const { getAllTablesRequest } = this.props;

    getAllTablesRequest(host, port);

    this.setState({ connectionTested: true });
  };

  handleChange = () => (event) => {
    const { tables } = this.props;
    const { data } = tables;
    const tableSelected = data.filter(table => parseInt(table.id) === parseInt(event.target.value));
    this.setState({ tableSelected: tableSelected[0] });
  };

  handleTableValidation(event) {
    this.setState({ validatedForm2: true });
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    this.handleSaveTable();
  }

  handleSaveTable = () => {
    const { tableSelected } = this.state;

    if (tableSelected !== null) {
      const { selectTableRequest } = this.props;
      selectTableRequest(tableSelected);
    }
  };

  render() {
    const {
      validatedForm1,
      validatedForm2,
      connectionTested,
      host,
      port,
      tableSelected,
    } = this.state;
    const { tables } = this.props;
    const { data, loading, error } = tables;
    return (
      <Fragment>
        <Header title="Configurações" />
        <Container>
          <Form
            noValidate
            validated={validatedForm1}
            onSubmit={e => this.handleHostAndPortValidation(e)}
          >
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column lg="3">
                Informe o endereço do WS
              </Form.Label>
              <Col lg="9">
                <Form.Control
                  required
                  type="url"
                  onChange={event => this.setState({ host: event.target.value })}
                  defaultValue={host}
                />
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                <Form.Control.Feedback type="invalid">
                  Informe o endereço do WS
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column lg="3">
                Informe a porta do WS
              </Form.Label>
              <Col md="6" lg="3">
                <Form.Control
                  required
                  type="text"
                  onChange={event => this.setState({ port: event.target.value })}
                  defaultValue={port}
                />
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                <Form.Control.Feedback type="invalid">Informe a porta do WS</Form.Control.Feedback>
              </Col>
              <Col md="6" lg="3">
                <Button
                  type="submit"
                  block
                  variant=""
                  className="button orangeButton mt-xs-3"
                >
                  <i className="fas fa-plug" />
                  Testar Conexão
                </Button>
              </Col>
            </Form.Group>
          </Form>
          {connectionTested && !!data && (
            <Form
              noValidate
              validated={validatedForm2}
              onSubmit={e => this.handleTableValidation(e)}
            >
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column lg="3">
                  Mesa
                </Form.Label>
                <Col md="6" lg="3">
                  <Form.Control
                    required
                    as="select"
                    value={tableSelected.id}
                    onChange={this.handleChange()}
                  >
                    <option value="">Selecione a mesa</option>
                    {[...data].map((table, index) => (
                      <option key={index} value={table.id}>
                        {table.name}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">Informe a mesa</Form.Control.Feedback>
                </Col>
                <Col md="6" lg="3">
                  <Button type="submit" block variant="" className="button blueButton">
                    <i className="far fa-save" />
                    Salvar
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          )}
          <Content>
            {loading && (
              <LoadingContainer>
                <Loader type="Oval" color="#ca6863" height="100" width="100" />
              </LoadingContainer>
            )}
            {!!error && !loading && (
              <Fragment>
                <div style={{ height: '50px' }} />
                <Alert variant="danger">
                  <i className="fas fa-times" />
                  {' '}
                  {error}
                </Alert>
              </Fragment>
            )}
            {connectionTested && !loading && !!data && (
              <Fragment>
                <div style={{ height: '50px' }} />
                <Alert variant="success">
                  <i className="fas fa-check" />
                  {' '}
Conexão efetuada com sucesso.
                </Alert>
              </Fragment>
            )}
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tables: state.tables,
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...TablesActions,
    ...SidebarActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
