import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';

import Header from '../../components/Header';

import {
  Content,
  Row,
  LoadingContainer,
  ErrorContainer,
  SuccessContainer,
} from '../../styles/components';
import { Container, ButtonsContainer } from './style';

class Settings extends Component {
  static propTypes = {
    tables: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.oneOfType([null, PropTypes.shape()])),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
    getAllTablesRequest: PropTypes.func.isRequired,
    selectTableRequest: PropTypes.func.isRequired,
  };

  state = {
    connectionTested: false,
    host: '',
    port: '',
    tableSelected: null,
  };

  componentWillReceiveProps(nextProps) {
    const { tables } = nextProps;
    const { tableSelected } = tables;
    if (tableSelected !== null) {
      alert(tableSelected);
      // window.open('/', '_self');
    }
  }

  handleTestConnect = () => {
    const { host, port } = this.state;
    const { getAllTablesRequest } = this.props;

    getAllTablesRequest(host, port);

    this.setState({ connectionTested: true });
  };

  handleSaveTable = () => {
    const { tableSelected } = this.state;

    if (tableSelected !== null) {
      const { selectTableRequest } = this.props;

      selectTableRequest();
    }
  };

  render() {
    const { connectionTested, host, port } = this.state;
    const { tables } = this.props;
    const { data, loading, error } = tables;
    return (
      <Fragment>
        <Header title="Configurações" />
        <Container>
          <Row>
            <TextField
              label="Informe o endereço do WS"
              className="textField"
              value={host}
              onChange={event => this.setState({ host: event.target.value })}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Row>
          <Row>
            <TextField
              label="Informe a porta do WS"
              className="textField"
              value={port}
              onChange={event => this.setState({ port: event.target.value })}
              margin="normal"
              variant="outlined"
            />
            <ButtonsContainer>
              <Button
                variant="contained"
                color="primary"
                className="button orangeButton"
                onClick={() => this.handleTestConnect()}
              >
                <i className="fas fa-plug" />
                Testar Conexão
              </Button>
              {connectionTested && !!data && (
                <Button
                  variant="contained"
                  color="primary"
                  className="button blueButton"
                  onClick={() => this.handleSaveTable()}
                >
                  <i className="fas fa-plug" />
                  Salvar
                </Button>
              )}
            </ButtonsContainer>
          </Row>
          <Row>mesas</Row>
          <Content>
            {loading && (
              <LoadingContainer>
                <Loader type="Oval" color="#ca6863" height="100" width="100" />
              </LoadingContainer>
            )}
            {!!error && (
              <Fragment>
                <div style={{ height: '50px' }} />
                <ErrorContainer>
                  <i className="fas fa-times" />
                  {error}
                </ErrorContainer>
              </Fragment>
            )}
            {connectionTested && !!data && (
              <Fragment>
                <div style={{ height: '50px' }} />
                <SuccessContainer>
                  <i className="fas fa-check" />
                  Conexão efetuada com sucesso.
                </SuccessContainer>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(TablesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
